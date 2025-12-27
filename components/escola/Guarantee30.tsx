'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'
import { useState } from 'react'

export default function Guarantee30() {
  const [imageError, setImageError] = useState(false)

  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Badge de garantia */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-48">
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-xl">
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold">30</div>
                      <div className="text-sm font-medium mt-1">DIAS</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/images/escola/garantia-badge.png"
                    alt="Garantia de 30 dias"
                    className="w-full h-full object-contain"
                    onError={() => setImageError(true)}
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                Garantia Total de 30 Dias
              </h2>
              
              <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed font-medium">
                Se você entrar, assistir às aulas e não gostar, devolvemos <strong className="text-escola-pink-500">100% do seu dinheiro</strong>.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0" />
                  <span className="text-slate-800 text-base md:text-lg font-medium">Sem perguntas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0" />
                  <span className="text-slate-800 text-base md:text-lg font-medium">Sem burocracia</span>
                </div>
              </div>

              <p className="mt-6 text-escola-pink-500 font-semibold text-lg md:text-xl">
                O risco é todo nosso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
