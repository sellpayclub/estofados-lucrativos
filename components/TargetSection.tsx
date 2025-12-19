'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const forWhom = [
  'Faxineiras',
  'Diaristas',
  'Mulheres que querem ganhar mais sem trabalhar mais',
  'Quem quer um serviço extra simples e lucrativo',
]

const notForWhom = [
  'Não é para quem quer ficar rico do dia pra noite sem fazer nada',
]

export default function TargetSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <h2 className="section-title">
          Para quem é esse curso?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Check size={24} className="text-primary-600" />
              </div>
              <span className="text-lg font-bold text-slate-900">É para você se:</span>
            </div>
            
            <StaggerContainer className="space-y-4">
              {forWhom.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-primary-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-2 rounded-lg">
                <X size={24} className="text-red-500" />
              </div>
              <span className="text-lg font-bold text-slate-900">NÃO é para você se:</span>
            </div>
            
            {notForWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-red-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                  <X size={16} className="text-red-500" />
                </div>
                <span className="text-slate-600">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

