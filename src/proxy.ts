import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const code = request.cookies.get('destination_auth')?.value

    if (!code || code !== '2026') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!login|_next/static|_next/image|favicon.ico).*)'],
}
