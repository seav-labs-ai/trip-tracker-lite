'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Camera, Sun, Umbrella } from 'lucide-react'

export default function InfoPage() {
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
    const itemVariants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

    const activities = [
        {
            name: 'Le Marais (Historic District)',
            desc: 'Cobblestone streets, historic plazas, boutiques, and stunning rooftop bars. Perfect for an afternoon stroll.',
            icon: <Camera color="var(--primary)" />
        },
        {
            name: 'Galeries Lafayette Haussmann',
            desc: 'Iconic upmarket French department store just around the corner. Great for shopping and admiring the stunning glass dome.',
            icon: <ShoppingBag color="var(--secondary)" />
        },
        {
            name: 'Luxembourg Gardens',
            desc: 'Beautiful formal gardens created in 1612. Perfect for a relaxing afternoon, strolling around the fountains and statues.',
            icon: <Sun color="var(--warning)" />
        },
        {
            name: 'Eiffel Tower Summit',
            desc: 'Must-visit! Grab tickets in advance to ride the elevator to the top for a spectacular panoramic view of Paris.',
            icon: <Umbrella color="var(--accent)" />
        }
    ]

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ paddingBottom: '2rem' }}>
            <motion.div variants={itemVariants} style={{ paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>See & Do</h1>
                <p style={{ color: 'var(--text-muted)' }}>Activities and shopping for the family.</p>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activities.map((act, i) => (
                    <div key={i} className="glass" style={{ padding: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                            {act.icon}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{act.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{act.desc}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
