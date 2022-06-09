import { NextResponse } from "next/server";
const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  //   const url = req.nextUrl.clone();

  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MYUSIC_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect("http://localhost:3000/signin");
    }
  }
}
