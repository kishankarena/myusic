// import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req) {
  //   const url = req.nextUrl.clone();
  const route = useRouter()

  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MYUSIC_ACCESS_TOKEN
    if (!token) {
      // return NextResponse.redirect('/signin')
      route.push('/signin')
    }
  }
}
