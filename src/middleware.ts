import { defaultLocale, locales } from "@/i18n.config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname lacks a locale prefix
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  const locale = defaultLocale;

  if (pathnameIsMissingLocale) {
    // Rewrite the URL to include the default locale if missing
    return NextResponse.rewrite(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }

  // If the pathname includes the default locale, remove it from the URL
  if (pathname.startsWith(`/${locale}`)) {
    return NextResponse.redirect(
      new URL(
        `${pathname.replace(new RegExp(`^/${locale}`), "")}`,
        request.url,
      ),
    );
  }

  // Allow request to proceed as normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
