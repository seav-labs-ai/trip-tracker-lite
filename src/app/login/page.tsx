'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { login } from '../actions'

export default function LoginPage() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleLogin(formData: FormData) {
        setLoading(true)
        setError('')
        try {
            const result = await login(formData)
            if (result?.error) {
                setError(result.error)
            }
        } catch (err: unknown) {
            if (err instanceof Error && !err.message.includes('NEXT_REDIRECT')) {
                setError('An error occurred.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="glass" style={{ padding: '3rem 2rem', textAlign: 'center', width: '100%', maxWidth: '360px' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Paris</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Family Trip Guide • 2026</p>
                    </div>

                    <form action={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            name="code"
                            type="password"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={4}
                            placeholder="Enter 4-digit code"
                            style={{
                                width: '100%', padding: '1rem', fontSize: '1.2rem',
                                textAlign: 'center', letterSpacing: '8px',
                                borderRadius: '8px', border: '1px solid var(--glass-border)',
                                background: 'rgba(0,0,0,0.2)', color: 'white',
                                outline: 'none'
                            }}
                            required
                        />
                        {error && <div style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>{error}</div>}

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                transition: 'opacity 0.2s',
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            {loading ? 'Verifying...' : 'Unlock Guide'}
                        </button>
                    </form>

                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <strong>Portfolio Demo:</strong> Enter code <strong>2026</strong> to unlock.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
