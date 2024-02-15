import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token');

  // List of public paths
  const publicPaths = ['/', '/LOGIN', '/verifyemail' , '/SIGNUP'];

  // Check if the current path is public
  const isPublicPath = publicPaths.includes(pathname);

  // If it's not a public path and there's no token, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/LOGIN', request.nextUrl));
  }

  // If it's a public path and there is a token, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/courses', request.nextUrl));
  }

  // Otherwise, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/LOGIN', '/verifyemail', '/profiledashboard/:path*' , '/courses' ,'/success' , '/failure' , '/blog'  , '/contacts' , '/favcourse' , '/paneladmin' , '/userhome'  , '/yourcourses' ,'/SIGNUP' ],
};
