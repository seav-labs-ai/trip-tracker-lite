'use client'

import { motion } from 'framer-motion'
import { MapPin, Plane, Building, Target, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{ paddingTop: '1rem' }}
    >
      <motion.header variants={itemVariants} style={{ marginBottom: '2rem' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}>Bonjour, Paris</h1>
        <p style={{ color: 'var(--text-muted)' }}>Your central hub for the 2-week trip.</p>
      </motion.header>

      <motion.div variants={itemVariants} className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{ background: 'var(--primary)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Building size={28} color="white" />
        </div>
        <div>
          <h3 style={{ marginBottom: '0.3rem' }}>Le Grand Hotel Paris</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            1 Rue Scribe, 75009 Paris, France
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--primary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> Check-in: 3:00 PM
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '4px solid var(--accent)' }}>
        <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
          <Target size={28} color="var(--accent)" />
        </div>
        <div>
          <h3 style={{ marginBottom: '0.3rem' }}>Paris Expo Center</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            1 Pl. de la Prte de Versailles, 75015 Paris, France
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Event location for daily schedules.
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
          <Plane size={24} color="var(--primary)" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>Charles de Gaulle (CDG)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>~25 mins to hotel without traffic</p>
        </div>
      </motion.div>

      <motion.h2 variants={itemVariants} style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <MapPin size={20} color="var(--primary)" /> Quick Links
      </motion.h2>

      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <Link href="/map" className="glass" style={{ padding: '1rem', textAlign: 'center', borderRadius: '12px', transition: 'background 0.2s', display: 'block' }}>
          <MapPin size={24} color="var(--primary)" style={{ margin: '0 auto 0.5rem' }} />
          <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Interactive Map</div>
        </Link>
        <Link href="/food" className="glass" style={{ padding: '1rem', textAlign: 'center', borderRadius: '12px', transition: 'background 0.2s', display: 'block' }}>
          <Target size={24} color="var(--secondary)" style={{ margin: '0 auto 0.5rem' }} />
          <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Places to Eat</div>
        </Link>
      </motion.div>

    </motion.div>
  )
}
