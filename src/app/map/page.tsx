'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import the map to avoid SSR "window" errors
const Map = dynamic(() => import('../../components/Map'), { ssr: false, loading: () => <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Map...</div> })

export default function MapPage() {
    const locations: { name: string; type: string; pos: [number, number]; desc: string }[] = [
        { name: 'Le Grand Hotel Paris', type: 'hotel', pos: [48.8718, 2.3294], desc: 'Our Hub. 1 Rue Scribe, Paris.' },
        { name: 'Palais Garnier', type: 'museum', pos: [48.8719, 2.3316], desc: 'Stunning historic opera house nearby.' },
        { name: 'Cafe de la Paix', type: 'food', pos: [48.8715, 2.3323], desc: 'Famous classic French dining.' },
        { name: 'Paris Expo Center', type: 'conference', pos: [48.8787, 2.2848], desc: 'Dr. Appointment / Conference.' },
        { name: 'Charles de Gaulle Airport', type: 'airport', pos: [49.0097, 2.5479], desc: 'Our Arrival & Departure.' },
        { name: 'Le Marais (Historic District)', type: 'food', pos: [48.8576, 2.3624], desc: 'Historic district, amazing food & vibe.' },
        { name: 'Northern Suburbs', type: 'danger', pos: [48.9360, 2.3533], desc: 'Generally advised to avoid, especially at night.' },
        { name: 'Seine Riverfront Park', type: 'neutral', pos: [48.8617, 2.3255], desc: 'Nice walkable park along the water.' },
        { name: 'Le Jules Verne', type: 'food', pos: [48.8584, 2.2945], desc: 'Iconic Eiffel Tower Restaurant.' },
        { name: 'The Louvre', type: 'museum', pos: [48.8606, 2.3376], desc: 'World-renowned art museum.' },
        { name: 'Musée d\'Orsay', type: 'museum', pos: [48.8600, 2.3266], desc: 'Spectacular impressionist collection.' }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem', paddingTop: '1rem' }}>Interactive Map</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                A tailored view of central locations for your trip. Tap markers for details.
            </p>

            <div style={{ padding: '4px', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                <Map locations={locations} />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', fontSize: '0.8rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38bdf8' }} /> Hotel</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} /> Conference</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#db2777' }} /> Food</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} /> Avoid</span>
            </div>
        </motion.div>
    )
}
