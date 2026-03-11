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
        { name: 'Paris Expo Center', type: 'conference', pos: [48.8787, 2.2848], desc: 'Event Location.' },
        { name: 'Charles de Gaulle Airport', type: 'airport', pos: [49.0107, 2.5479], desc: 'Our Arrival & Departure.' },
        { name: 'Le Marais (Historic District)', type: 'food', pos: [48.8576, 2.3624], desc: 'Historic district, amazing food & vibe.' },
        { name: 'Northern Suburbs', type: 'danger', pos: [48.9360, 2.3533], desc: 'Generally advised to avoid, especially at night.' },
        { name: 'The Louvre', type: 'museum', pos: [48.8606, 2.3376], desc: 'World-renowned art museum.' },
        { name: 'Musée d\'Orsay', type: 'museum', pos: [48.8600, 2.3266], desc: 'Spectacular impressionist collection.' },
        { name: 'Sacré-Cœur', type: 'museum', pos: [48.8867, 2.3431], desc: 'Basilica with a stunning view of Paris.' },
        { name: 'Angelina', type: 'food', pos: [48.8651, 2.3275], desc: 'Famous for hot chocolate and pastries.' },
        { name: 'Bouillon Chartier', type: 'food', pos: [48.8720, 2.3423], desc: 'Classic French "bouillon" experience.' },
        { name: 'Musée de l\'Orangerie', type: 'museum', pos: [48.8637, 2.3216], desc: 'Home to Monet\'s Water Lilies.' }
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
