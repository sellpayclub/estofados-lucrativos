'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

export default function NoExperienceNeeded() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-escola-pink-200 to-escola-gold-100 blur-3xl opacity-30 rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-escola-cream-50 to-escola-pink-50 rounded-3xl p-8 md:p-12 border-2 border-escola-pink-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-escola-pink-500 rounded-full mb-4">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                "MAS EU PRECISO TER EXPERIÊNCIA?"
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <p className="text-2xl md:text-3xl font-heading font-bold text-center text-slate-900 mb-4">
                Não. Zero. Nenhuma.
              </p>
              <p className="text-lg md:text-xl text-center text-slate-700 leading-relaxed">
                A <strong className="text-escola-pink-600">Escola Essência Criativa</strong> foi criada para iniciantes absolutas.
                Você aprende o passo a passo do zero, sem erros, sem desperdício e sem frustração.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

