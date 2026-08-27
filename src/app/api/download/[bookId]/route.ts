import { createReadStream, existsSync, statSync } from "fs";
import path from "path";
import { Readable } from "stream";
import { NextRequest, NextResponse } from "next/server";
import { isCheckoutMarkedPaid } from "@/features/payments/orders";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";

/** Relative paths under content/books — never allow .. */
const ALLOWED_FILES: Record<string, string> = {
  "100-inspirational-quotes-part-1": "100-inspirational-quotes-part-1.pdf",
  "everyday-motivation": "everyday-motivation.pdf",
  "kids-01-renewable-energy": "kids-stories/01-renewable-energy.pdf",
  "kids-02-shooting-stars": "kids-stories/02-shooting-stars-meteors-comets.pdf",
  "kids-03-understanding-floods": "kids-stories/03-understanding-floods.pdf",
  "kids-04-sink-or-float": "kids-stories/04-sink-or-float.pdf",
  "kids-05-moon-magic": "kids-stories/05-moon-magic-lunar-eclipse.pdf",
  "kids-06-sun-secrets": "kids-stories/06-sun-secrets-solar-eclipse.pdf",
  "kids-07-lets-recycle": "kids-stories/07-lets-recycle.pdf",
  "kids-08-invisible-germs": "kids-stories/08-mystery-of-invisible-germs.pdf",
  "kids-09-lets-move": "kids-stories/09-lets-move-exercise.pdf",
  "kids-10-ocean-adventures": "kids-stories/10-ocean-adventures-sea-creatures.pdf",
  "kids-canva-links": "kids-stories/kids-stories-canva-links.pdf",
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
  const relativePath = ALLOWED_FILES[bookId];

  if (!relativePath || relativePath.includes("..")) {
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

  const booksRoot = path.join(process.cwd(), "content", "books");
  const filePath = path.join(booksRoot, relativePath);
  const resolved = path.resolve(filePath);

  if (!resolved.startsWith(path.resolve(booksRoot))) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  if (!existsSync(resolved)) {
    return NextResponse.json(
      { error: "File unavailable." },
      { status: 404 },
    );
  }

  const stats = statSync(resolved);
  const stream = createReadStream(resolved);
  const webStream = Readable.toWeb(stream) as unknown as ReadableStream;
  const downloadName = path.basename(resolved);

  return new NextResponse(webStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(stats.size),
      "Content-Disposition": `attachment; filename="${downloadName}"`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
