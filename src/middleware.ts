import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value;
        const url = req.nextUrl.clone();
        const { pathname } = req.nextUrl;

        if (token && pathname === "/login") {
            url.pathname = "/dashboard";
            return NextResponse.redirect(url)
        }

        if (!token && (pathname === "/" || pathname.startsWith("/dashboard"))) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    } catch (err: unknown) {
        console.log("get here not okay")

        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: ["/", "/login", "/signup", "/dashboard/:path*"]
};