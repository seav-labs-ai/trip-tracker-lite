'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const code = formData.get('code') as string
    if (code === '2026') {
        // Expires in 30 days
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            ; (await cookies()).set('destination_auth', code, {
                expires,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
            })
        redirect('/')
    }
    return { error: 'Invalid Passcode' }
}

export async function logout() {
    ; (await cookies()).delete('destination_auth')
    redirect('/login')
}
