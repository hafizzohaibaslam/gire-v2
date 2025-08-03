import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Skip middleware for sign-in page
    if (request.nextUrl.pathname === "/admin/sign-in") {
      return NextResponse.next();
    }

    // Check if user is authenticated as admin
    const isAdmin = request.cookies.get("isAdmin")?.value === "true";
    const accessToken = request.cookies.get("accessToken")?.value;

    // If not admin or no access token, redirect to sign-in
    if (!isAdmin || !accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
