'use client'

import { motion } from 'framer-motion'
import { Gem, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function OpportunitySection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-primary-400/20 blur-3xl rounded-full" />
          
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 p-4 rounded-2xl">
                <Gem size={40} className="text-slate-900" />
              </div>
            </motion.div>

            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
              A verdade é que você já está sentada em cima de uma{' '}
              <span className="text-accent-400">mina de ouro</span>…
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300">
              e talvez nem perceba.
            </p>

            <motion.div 
              className="mt-8 inline-flex items-center gap-2 text-primary-400 font-medium"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span>Continue lendo</span>
              <ArrowRight size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

