import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ALTERNATE_HOSTS, CANONICAL_HOST } from "@/config/site";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (!host || host === CANONICAL_HOST) {
    return NextResponse.next();
  }

  const shouldRedirect = (ALTERNATE_HOSTS as readonly string[]).includes(host);
  if (!shouldRedirect) {
    return NextResponse.next();
  }

  const destination = new URL(request.url);
  destination.protocol = "https:";
  destination.host = CANONICAL_HOST;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|static|robots.txt|sitemap.xml).*)",
  ],
};
