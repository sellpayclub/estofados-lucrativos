'use client'

import { motion } from 'framer-motion'
import { Check, DollarSign, Clock, Users, ShoppingCart } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../AnimatedSection'

const advantages = [
  { icon: DollarSign, text: 'Baixíssimo investimento' },
  { icon: Clock, text: 'Produção em 30 a 45 minutos' },
  { icon: DollarSign, text: 'Venda de R$35 até R$150 por peça' },
  { icon: Users, text: 'Todo mundo compra (decoração, presente, relaxamento)' },
  { icon: ShoppingCart, text: 'Pode vender no bairro, WhatsApp ou para todo o Brasil no mercado livre/ shopee' },
]

// Imagens de velas para exibir
const candleImages = [
  '/images/escola/produtos/vela-1.png',
  '/images/escola/produtos/vela-2.png',
  '/images/escola/produtos/vela-3.png',
  '/images/escola/produtos/vela-4.png',
  '/images/escola/produtos/vela-5.webp',
  '/images/escola/produtos/vela-6.webp',
]

export default function WhyCandlesWork() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-block bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            ✨ POR QUE VELAS AROMÁTICAS FUNCIONAM TANTO?
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Porque elas unem tudo o que um negócio lucrativo precisa:
          </h2>
        </div>

        <StaggerContainer className="space-y-4 mb-10">
          {advantages.map((advantage, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm border border-slate-100">
                <div className="bg-escola-pink-50 p-3 rounded-lg">
                  <advantage.icon size={24} className="text-escola-pink-500" />
                </div>
                <span className="text-base md:text-lg font-medium text-slate-800">{advantage.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Galeria de velas */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 text-center mb-6">
            Veja alguns exemplos de velas que você vai aprender a fazer:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {candleImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={image}
                  alt={`Vela aromática exemplo ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
