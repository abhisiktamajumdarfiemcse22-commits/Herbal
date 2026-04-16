// Minimal middleware: named export `middleware` required by Next.js
// This middleware currently allows all requests through. Customize as needed.
import { NextResponse } from 'next/server'

/**
 * Named export `middleware` - Next.js will call this for matching routes.
 * Adjust logic here to add auth checks, redirects, headers, etc.
 */
export function middleware(request) {
  // Example placeholder: allow the request to continue.
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/chat/:path*',
    '/recommend/:path*',
    '/api/:path*'
  ]
}