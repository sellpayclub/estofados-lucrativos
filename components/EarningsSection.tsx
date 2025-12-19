'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Calculator, Users, Calendar } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const calculations = [
  { icon: Calculator, text: 'Você cobra R$ 150 a R$ 300 por limpeza de sofá' },
  { icon: Calendar, text: 'Atende 2 a 3 estofados por semana' },
  { icon: Users, text: 'Apenas com clientes que você já tem' },
]

export default function EarningsSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <TrendingUp size={18} />
            QUANTO DÁ PRA GANHAR?
          </motion.span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Imagine isso:
          </h2>
        </div>

        <div className="space-y-3 mb-6">
          {calculations.map((calc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm border border-slate-100"
            >
              <div className="bg-primary-50 p-3 rounded-lg flex-shrink-0">
                <calc.icon size={24} className="text-primary-600" />
              </div>
              <span className="text-lg text-slate-700">{calc.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 blur-2xl opacity-30 rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <p className="text-primary-100 text-lg mb-4">Resultado:</p>
            
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            >
              <span className="text-4xl md:text-6xl font-heading font-extrabold text-white">
                R$ 7.000 a R$ 9.000
              </span>
              <span className="block text-xl text-primary-100 mt-2">por mês</span>
            </motion.div>

            <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
              {[
                'Sem lotar agenda',
                'Sem sair batendo de porta em porta',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-white font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-base md:text-lg text-slate-600 mt-6"
        >
          É um serviço <strong className="text-primary-600">extra, rápido, lucrativo</strong> e altamente valorizado.
        </motion.p>
      </div>
    </AnimatedSection>
  )
}

