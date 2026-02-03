import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "en",
});

function parseJwt(token: string) {
  try {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64").toString();
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Extract locale safely
  const locale = pathname.startsWith("/tr") ? "tr" : "en";

  const token = req.cookies.get("access_token")?.value;

  // Protected route prefixes
  const isProtected =
    pathname.startsWith(`/${locale}/owner`) ||
    pathname.startsWith(`/${locale}/admin`) ||
    pathname.startsWith(`/${locale}/super-admin`) ||
    pathname.startsWith(`/${locale}/dashboard`);

  if (!isProtected) {
    return I18nMiddleware(req);
  }

  // ----- AUTHENTICATION -----
  if (!token) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  const payload = parseJwt(token);

  if (!payload?.role) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  const role = payload.role;

  // ----- AUTHORIZATION (ORDER MATTERS) -----

  if (pathname.startsWith(`/${locale}/super-admin`)) {
    if (role !== "super_admin") {
      return NextResponse.redirect(
        new URL(`/${locale}/unauthorized`, req.url)
      );
    }
  } else if (pathname.startsWith(`/${locale}/admin`)) {
    if (role !== "admin") {
      return NextResponse.redirect(
        new URL(`/${locale}/unauthorized`, req.url)
      );
    }
  } else if (pathname.startsWith(`/${locale}/owner`)) {
    if (role !== "owner") {
      return NextResponse.redirect(
        new URL(`/${locale}/unauthorized`, req.url)
      );
    }
  }

  return I18nMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
};
