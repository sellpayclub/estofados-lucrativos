'use client'

import { motion } from 'framer-motion'
import { Calendar, Frown, DollarSign, Clock, HelpCircle } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const painPoints = [
  { icon: Calendar, text: 'A agenda já está cheia' },
  { icon: Frown, text: 'O corpo já está cansado' },
  { icon: DollarSign, text: 'O faturamento parece ter um teto' },
]

const concerns = [
  { icon: Clock, text: 'Não pode trabalhar mais dias' },
  { icon: HelpCircle, text: 'Não quer depender de patrão' },
  { icon: HelpCircle, text: 'Não sabe que outro serviço poderia oferecer' },
]

export default function PainSection() {
  return (
    <AnimatedSection className="bg-slate-50 py-10 md:py-16">
      <div className="section-container">
        <motion.h2 
          className="text-2xl md:text-4xl font-heading font-bold text-center mb-4 text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Você trabalha como faxineira ou diarista,
          <br className="hidden md:block" />
          <span className="text-primary-600"> se esforça todos os dias…</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-center text-slate-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mas no fim do mês o dinheiro nunca sobra?
        </motion.p>

        <StaggerContainer className="grid gap-3 md:gap-4 mb-8">
          {painPoints.map((point, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <point.icon size={24} className="text-red-500" />
                </div>
                <span className="text-lg font-medium text-slate-700">{point.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100"
        >
          <p className="text-lg md:text-xl text-center text-slate-700 mb-6">
            Você até gostaria de ganhar mais, mas:
          </p>
          
          <div className="space-y-4">
            {concerns.map((concern, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-500 text-sm">✕</span>
                </div>
                <span className="text-slate-600">{concern.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

