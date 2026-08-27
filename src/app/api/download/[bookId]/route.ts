import { createReadStream, existsSync, statSync } from "fs";
import path from "path";
import { Readable } from "stream";
import { NextRequest, NextResponse } from "next/server";
import { isCheckoutMarkedPaid } from "@/features/payments/orders";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";

const ALLOWED_FILES: Record<string, string> = {
  "100-inspirational-quotes-part-1": "100-inspirational-quotes-part-1.pdf",
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ bookId: string }> },
) {
  const ip = getClientIp(request.headers);
  const limited = rateLimit(`download:${ip}`, 20, 60_000);

  if (!limited.success) {
    return NextResponse.json(
      { error: "Too many download attempts." },
      { status: 429 },
    );
  }

  const { bookId } = await context.params;
  const fileName = ALLOWED_FILES[bookId];

  if (!fileName) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  const checkoutId =
    request.nextUrl.searchParams.get("checkout_id") ||
    request.nextUrl.searchParams.get("session_id");
  const accessToken = request.nextUrl.searchParams.get("token");
  const expectedToken = process.env.DOWNLOAD_ACCESS_TOKEN;
  const isDemo =
    process.env.NODE_ENV !== "production" &&
    request.nextUrl.searchParams.get("demo") === "1";

  const tokenOk = Boolean(
    expectedToken && accessToken && accessToken === expectedToken,
  );
  const paidOk = Boolean(checkoutId && isCheckoutMarkedPaid(checkoutId));

  if (!isDemo && !tokenOk && !paidOk) {
    return NextResponse.json(
      { error: "Authorized purchase required." },
      { status: 401 },
    );
  }

  const filePath = path.join(process.cwd(), "content", "books", fileName);

  if (!existsSync(filePath)) {
    return NextResponse.json(
      { error: "File unavailable." },
      { status: 404 },
    );
  }

  const stats = statSync(filePath);
  const stream = createReadStream(filePath);
  const webStream = Readable.toWeb(stream) as unknown as ReadableStream;

  return new NextResponse(webStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(stats.size),
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
