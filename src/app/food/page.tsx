'use client'

import { motion } from 'framer-motion'
import { Utensils, Coffee, MapPin, Award } from 'lucide-react'

export default function FoodPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    }

    const places = [
        {
            name: 'Le Jules Verne', type: 'Fine Dining / French', distance: '15 min drive', rating: '⭐️⭐️⭐️⭐️⭐️',
            desc: 'Iconic Michelin-starred restaurant located on the second floor of the Eiffel Tower.', icon: <Award className="text-primary" />
        },
        {
            name: 'L\'Ami Jean', type: '7th Arrondissement / Casual', distance: '15 min drive', rating: '⭐️⭐️⭐️⭐️⭐️',
            desc: 'Energetic atmosphere serving amazing Basque-French cuisine. Famous for their rice pudding.', icon: <Utensils />
        },
        {
            name: 'Cafe de la Paix', type: 'Near Le Grand Hotel Paris / Classic French', distance: '3 min walk', rating: '⭐️⭐️⭐️⭐️',
            desc: 'Iconic 19th-century cafe with an ornate interior right across from the Palais Garnier.', icon: <Utensils />
        },
        {
            name: 'Carette', type: 'Coffee / Bakery', distance: '10 min walk', rating: '⭐️⭐️⭐️⭐️⭐️',
            desc: 'Famous for having the best hot chocolate and incredible macarons in Paris. Excellent breakfast spot.', icon: <Coffee />
        }
    ]

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.div variants={itemVariants} style={{ paddingTop: '1rem', marginBottom: '2rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Where to Eat</h1>
                <p style={{ color: 'var(--text-muted)' }}>Curated list near Le Grand Hotel Paris & Palais des congrès.</p>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {places.map((place, i) => (
                    <div key={i} className="glass" style={{ padding: '1.2rem', display: 'flex', gap: '1rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {place.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', display: 'flex', justifyContent: 'space-between' }}>
                                {place.name}
                            </h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.4rem' }}>
                                {place.type} • {place.rating}
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                                {place.desc}
                            </p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={12} /> {place.distance}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
