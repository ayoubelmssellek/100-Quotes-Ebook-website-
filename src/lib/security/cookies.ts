import { cookies } from "next/headers";

type SecureCookieOptions = {
  name: string;
  value: string;
  maxAgeSeconds?: number;
};

/**
 * Helper for setting secure HTTP-only SameSite cookies from Server Actions.
 */
export async function setSecureCookie({
  name,
  value,
  maxAgeSeconds = 60 * 60 * 24 * 7,
}: SecureCookieOptions) {
  const cookieStore = await cookies();
  cookieStore.set({
    name,
    value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: maxAgeSeconds,
  });
}

export async function clearSecureCookie(name: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
