'use client'

import { motion } from 'framer-motion'
import { Check, Gift, Zap, Clock, FileText, MessageSquare } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const includes = [
  { icon: Zap, text: 'Curso completo passo a passo' },
  { icon: MessageSquare, text: 'Scripts prontos de venda' },
  { icon: FileText, text: 'Modelo de proposta profissional' },
  { icon: Clock, text: 'Acesso online imediato' },
]

export default function PricingSection() {
  return (
    <AnimatedSection id="oferta" className="py-10 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold mb-4"
          >
            <Gift size={18} />
            OFERTA ESPECIAL
          </motion.span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white">
            Curso Estofados Lucrativos
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 blur-2xl opacity-30 rounded-3xl" />
          
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-6 text-center">
              <p className="text-primary-100 mb-2">Acesso completo por</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-white/60 line-through text-xl">R$ 197,00</span>
                <motion.span
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="text-5xl md:text-6xl font-heading font-extrabold text-white"
                >
                  R$ 49,90
                </motion.span>
              </div>
              <p className="text-primary-100 mt-2 font-medium">pagamento único</p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="space-y-4 mb-8">
                {includes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <item.icon size={20} className="text-primary-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://pay.cakto.com.br/5mch446_693546"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white text-center text-xl font-bold py-5 rounded-xl shadow-lg shadow-primary-600/30 hover:shadow-xl transition-shadow"
              >
                QUERO COMEÇAR AGORA
              </motion.a>

              <div className="mt-6 text-center space-y-2">
                <p className="text-slate-500 text-sm">
                  Menos que o valor de uma diária
                </p>
                <p className="text-primary-600 font-semibold">
                  Pode se pagar já no primeiro serviço vendido!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

