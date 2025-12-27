'use client'

import { motion } from 'framer-motion'
import { Gift, Check } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const bonuses = [
  { title: 'Rótulos Profissionais' },
  { title: 'Velas inspiradas em marcas famosas' },
  { title: 'Modelos secretos campeões de venda' },
  { title: 'Método para vender sem redes sociais' },
  { title: 'Protocolo Anti-Falhas' },
]

export default function BonusesSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-escola-pink-50 text-escola-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Gift size={18} />
            BÔNUS LIBERADO PARA NOVAS ALUNAS
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-2">
            5 Bônus Exclusivos
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Que entram até 31 de Janeiro de 2026
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Imagem do Kit Bonus */}
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/escola/kit-bonus.png"
                  alt="Kit Bônus - Escola Essência Criativa"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Lista de bônus */}
            <div className="order-1 md:order-2 space-y-4">
              {bonuses.map((bonus, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded-xl p-5 flex items-center gap-4 shadow-sm border border-slate-100"
                >
                  <div className="bg-escola-pink-500 p-2 rounded-lg flex-shrink-0">
                    <Check size={24} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-800 text-lg md:text-xl">{bonus.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
