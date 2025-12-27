'use client'

import { motion } from 'framer-motion'
import { Gift, Tag, Sparkles, Lock, Shield } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../AnimatedSection'

const bonuses = [
  { icon: Tag, title: 'Rótulos Profissionais' },
  { icon: Sparkles, title: 'Velas inspiradas em marcas famosas' },
  { icon: Lock, title: 'Modelos secretos campeões de venda' },
  { icon: Shield, title: 'Método para vender sem redes sociais' },
  { icon: Gift, title: 'Protocolo Anti-Falhas' },
]

export default function BonusesSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-escola-pink-50 text-escola-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Gift size={18} />
              BÔNUS LIBERADO
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-2">
              5 Bônus Exclusivos
            </h2>
            <p className="text-slate-600">
              Para novas alunas que entrarem até <strong>31 de Janeiro de 2026</strong>
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bonuses.map((bonus, i) => (
              <StaggerItem key={i}>
                <div className="bg-slate-50 rounded-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="bg-escola-pink-50 p-3 rounded-lg">
                    <bonus.icon size={24} className="text-escola-pink-500" />
                  </div>
                  <span className="font-medium text-slate-800 text-base md:text-lg">{bonus.title}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
