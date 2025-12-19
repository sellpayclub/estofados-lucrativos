'use client'

import { motion } from 'framer-motion'
import { Star, DollarSign, Shield, Heart, Award } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const benefits = [
  { icon: DollarSign, text: 'Mais dinheiro no fim do mês' },
  { icon: Shield, text: 'Menos aperto financeiro' },
  { icon: Heart, text: 'Mais segurança' },
  { icon: Award, text: 'Mais valorização do seu trabalho' },
  { icon: Star, text: 'Um serviço que te diferencia das outras diaristas' },
]

export default function BenefitsSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent-400/20 text-accent-500 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Star size={16} fill="currentColor" />
            APÓS O CURSO
          </motion.span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Você vai ter...
          </h2>
        </div>

        <StaggerContainer className="space-y-3 mb-6">
          {benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm border border-primary-100"
              >
                <div className="bg-primary-100 p-3 rounded-lg">
                  <benefit.icon size={24} className="text-primary-600" />
                </div>
                <span className="text-lg font-medium text-slate-700">{benefit.text}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-6 md:p-8 text-center shadow-xl"
        >
          <p className="text-xl md:text-2xl text-white font-medium">
            Você deixa de ser <span className="opacity-70">"só mais uma"</span> e passa a ser{' '}
            <strong className="text-accent-400">a profissional que resolve tudo.</strong>
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

