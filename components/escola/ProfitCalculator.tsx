'use client'

import { motion } from 'framer-motion'
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

export default function ProfitCalculator() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-gradient-to-b from-escola-cream-50 to-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-escola-gold-100 text-escola-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator size={18} />
            Conta simples
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Custo por vela', value: 'R$4', color: 'from-slate-400 to-slate-500' },
              { label: 'Venda média iniciante', value: 'R$35', color: 'from-escola-pink-400 to-escola-pink-500' },
              { label: 'Lucro por unidade', value: 'R$31', color: 'from-green-500 to-green-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-center text-white shadow-lg`}
              >
                <p className="text-sm md:text-base opacity-90 mb-2">{item.label}</p>
                <p className="text-3xl md:text-4xl font-heading font-extrabold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-escola-pink-500 to-escola-pink-600 rounded-3xl p-8 md:p-10 text-center shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
              <div className="text-white">
                <p className="text-lg md:text-xl mb-1">20 velas por semana</p>
                <p className="text-sm opacity-90">Trabalhando apenas 1 Dia!</p>
              </div>
              <ArrowRight className="text-white" size={32} />
              <div className="text-white">
                <p className="text-4xl md:text-5xl font-heading font-extrabold">R$ 620</p>
                <p className="text-lg md:text-xl opacity-90">de lucro</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

