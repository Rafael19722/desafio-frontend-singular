import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "es"];
const default = "pt";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/images") ||
        pathname.startsWith("/icons") ||
        pathname.startsWith(".")

    ) {
        return;
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/((?!_next).*)"],
};