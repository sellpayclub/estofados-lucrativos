'use client'

import { motion } from 'framer-motion'
import { Clock, DollarSign, TrendingUp, Heart, Sparkles } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../AnimatedSection'

const benefits = [
  { icon: Clock, text: 'Trabalhar no seu tempo' },
  { icon: DollarSign, text: 'Ter renda própria sem depender de ninguém' },
  { icon: TrendingUp, text: 'Parar de depender de salário baixo' },
  { icon: Heart, text: 'Fazer algo prazeroso e lucrativo' },
  { icon: Sparkles, text: 'Ver dinheiro entrando com algo feito por você' },
]

export default function ImagineSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Imagina você poder...
          </h2>
        </motion.div>

        <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
          {benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-slate-50 rounded-xl p-5 flex items-center gap-4 shadow-sm border border-slate-100"
              >
                <div className="bg-escola-pink-50 p-3 rounded-lg">
                  <benefit.icon size={24} className="text-escola-pink-500" />
                </div>
                <span className="text-base md:text-lg font-medium text-slate-800">{benefit.text}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
