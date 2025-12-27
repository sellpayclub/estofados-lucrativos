'use client'

import { motion } from 'framer-motion'
import { Check, DollarSign, Clock, Users, Home, ShoppingCart } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../AnimatedSection'

const advantages = [
  { icon: DollarSign, text: 'Baixíssimo investimento' },
  { icon: Clock, text: 'Produção em 30 a 45 minutos' },
  { icon: DollarSign, text: 'Venda de R$35 até R$150 por peça' },
  { icon: Users, text: 'Todo mundo compra (decoração, presente, relaxamento)' },
  { icon: ShoppingCart, text: 'Pode vender no bairro, WhatsApp ou para todo o Brasil no mercado livre/ shopee' },
]

export default function WhyCandlesWork() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-block bg-escola-pink-100 text-escola-pink-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            ✨ POR QUE VELAS AROMÁTICAS FUNCIONAM TANTO?
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Porque elas unem tudo o que um negócio lucrativo precisa:
          </h2>
        </div>

        <StaggerContainer className="space-y-4 mb-10">
          {advantages.map((advantage, i) => (
            <StaggerItem key={i}>
              <div className="bg-escola-cream-50 rounded-xl p-5 flex items-center gap-4 border border-escola-pink-100">
                <div className="bg-escola-pink-100 p-3 rounded-lg">
                  <advantage.icon size={24} className="text-escola-pink-600" />
                </div>
                <span className="text-lg font-medium text-slate-700">{advantage.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}

