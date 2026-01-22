import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

// Internationalization middleware
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "en",
});

// JWT parser helper
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
  
  // ----- ROLE-BASED ACCESS CONTROL -----
  // Only apply role checks to protected routes
  const protectedPaths = [
    "/owner", 
    "/admin", 
    "/super-admin",
    "/dashboard", // Add any other protected paths
  ];
  
  const isProtectedRoute = protectedPaths.some(path => 
    pathname.startsWith(`/en${path}`) || 
    pathname.startsWith(`/tr${path}`) || 
    pathname.startsWith(path)
  );
  
  if (isProtectedRoute) {
    const token = req.cookies.get("access_token")?.value;

    if (!token) {
      // Redirect to login, preserving locale
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
    }

    const payload = parseJwt(token);

    if (!payload || !payload.role) {
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
    }

    const role = payload.role;
    
    // Check role permissions
    if (pathname.includes("/owner") && role !== "owner") {
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
    }

    if (pathname.includes("/admin") && role !== "admin") {
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
    }

    if (pathname.includes("/super-admin") && role !== "super_admin") {
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
    }
  }
  
  // ----- INTERNATIONALIZATION -----
  // Apply i18n middleware to all requests
  return I18nMiddleware(req);
}

export const config = {
  matcher: [
    // Match all paths except API, static files, etc.
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
};