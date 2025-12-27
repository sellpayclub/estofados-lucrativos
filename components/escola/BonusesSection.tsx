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
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-escola-gold-200 to-escola-pink-200 blur-3xl opacity-30 rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-escola-pink-500 to-escola-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Gift size={18} />
                BÔNUS LIBERADO
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2">
                5 Bônus Exclusivos
              </h2>
              <p className="text-escola-pink-100">
                Para novas alunas que entrarem até <strong>31 de Janeiro de 2026</strong>
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bonuses.map((bonus, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 border border-white/20">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <bonus.icon size={24} className="text-white" />
                    </div>
                    <span className="font-medium">{bonus.title}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

