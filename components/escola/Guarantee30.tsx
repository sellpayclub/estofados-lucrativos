'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

export default function Guarantee30() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-escola-gold-100 to-escola-pink-100 rounded-3xl" />
          
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-escola-gold-400 blur-xl opacity-30 rounded-full" />
                  <div className="relative bg-gradient-to-br from-escola-gold-400 to-escola-gold-500 p-6 rounded-2xl shadow-xl">
                    <Shield size={64} className="text-white" />
                  </div>
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                  Garantia Total de 30 Dias
                </h2>
                
                <p className="text-lg text-slate-600 mb-6">
                  Se você entrar, assistir às aulas e não gostar, devolvemos <strong>100% do seu dinheiro</strong>.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-escola-pink-500 flex-shrink-0" />
                    <span className="text-slate-700">Sem perguntas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-escola-pink-500 flex-shrink-0" />
                    <span className="text-slate-700">Sem burocracia</span>
                  </div>
                </div>

                <p className="mt-6 text-escola-pink-600 font-semibold">
                  O risco é todo nosso.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

