'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Map, Info, Coffee, ShieldAlert, Target } from 'lucide-react'

export function Navigation() {
    const pathname = usePathname()
    if (pathname === '/login') return null

    const navItems = [
        { name: 'Hub', path: '/', icon: <Target size={22} /> },
        { name: 'Map', path: '/map', icon: <Map size={22} /> },
        { name: 'Eat', path: '/food', icon: <Coffee size={22} /> },
        { name: 'Info', path: '/info', icon: <Info size={22} /> },
        { name: 'Safe', path: '/safety', icon: <ShieldAlert size={22} /> },
    ]

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: 'env(safe-area-inset-bottom)',
            zIndex: 50
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '64px',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                {navItems.map((item) => {
                    const isActive = pathname === item.path
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                                transition: 'color 0.2s'
                            }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    style={{
                                        position: 'absolute',
                                        top: '-2px',
                                        width: '30px',
                                        height: '3px',
                                        background: 'var(--primary)',
                                        borderRadius: '2px',
                                        boxShadow: '0 0 10px var(--primary)'
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                />
                            )}
                            {item.icon}
                            <span style={{ fontSize: '0.65rem', marginTop: '4px', fontWeight: isActive ? 600 : 400 }}>
                                {item.name}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
