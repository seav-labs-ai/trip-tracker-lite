'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ShieldCheck, HeartPulse, Phone } from 'lucide-react'

export default function SafetyPage() {
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
    const itemVariants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ paddingBottom: '2rem' }}>
            <motion.div variants={itemVariants} style={{ paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--warning), var(--danger))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Safety & Emergency</h1>
                <p style={{ color: 'var(--text-muted)' }}>Important contacts and areas to avoid.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass" style={{ padding: '1.2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--danger)' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--danger)', marginBottom: '0.5rem' }}>
                    <AlertTriangle size={20} /> Areas to Avoid
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Paris is generally safe for tourists, but it&apos;s best to avoid these neighborhoods completely, especially at night:
                </p>
                <ul style={{ fontSize: '0.9rem', color: 'var(--foreground)', margin: 0, paddingLeft: '1.2rem' }}>
                    <li><strong>Northern Suburbs (Saint-Denis):</strong> Use caution around certain transit hubs at night. Generally fine during the day but stay alert.</li>
                    <li><strong>Certain RER Areas:</strong> Be mindful of your belongings on the B line late at night.</li>
                    <li><strong>Crowded Tourist Spots:</strong> Watch for pickpockets near the Eiffel Tower, Sacré-Cœur, and the Louvre. Keep bags closed.</li>
                </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="glass" style={{ padding: '1.2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    <ShieldCheck size={20} /> General Tips
                </h3>
                <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Public transport (Metro/RER) is the most efficient way to get around. Use the Bonjour RATP app.</li>
                    <li>Tap water in Paris is high quality and perfectly safe to drink.</li>
                    <li>Be wary of "helpful" strangers at ticket machines or tourist hubs.</li>
                    <li>English is widely spoken in tourist areas, but learning basic French phrases (Bonjour, Merci, S'il vous plaît) is highly appreciated.</li>
                </ul>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Emergency Contacts</h3>
                <div className="glass" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '50%' }}>
                            <HeartPulse color="var(--danger)" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Emergency (EU Universal)</div>
                            <div style={{ fontSize: '1.2rem', color: 'var(--danger)', fontWeight: 'bold' }}>112</div>
                        </div>
                    </div>
                    <Phone color="var(--text-muted)" />
                </div>
            </motion.div>
        </motion.div>
    )
}
