import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Minimal middleware using the modern `src/middleware.ts` location.
// Keeps behavior permissive for now; customize as needed (auth, redirects).
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/chat/:path*',
    '/recommend/:path*',
    '/api/:path*'
  ]
}
