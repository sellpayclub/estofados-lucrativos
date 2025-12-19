'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import Logo from './Logo'

const benefits = [
  'Fazer limpeza de estofados do jeito certo',
  'Usar poucos produtos (investimento baixíssimo)',
  'Oferecer esse serviço como extra para seus próprios clientes',
  'Ganhar muito mais sem trabalhar mais horas',
]

export default function SolutionSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-gradient-to-b from-primary-600 to-primary-700">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            A SOLUÇÃO
          </motion.div>

          <Logo size="lg" className="justify-center mb-6 [&_span]:text-white [&_.text-slate-600]:text-primary-200" />
          
          <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto">
            Um curso online passo a passo que ensina você a:
          </p>
        </div>

        <StaggerContainer className="space-y-3 mb-6">
          {benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4">
                <div className="bg-white rounded-full p-2 flex-shrink-0">
                  <Check size={20} className="text-primary-600" strokeWidth={3} />
                </div>
                <span className="text-lg text-white font-medium">{benefit}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-xl"
        >
          <p className="text-lg md:text-xl text-slate-700">
            Tudo explicado de forma <strong>simples, prática e direta</strong>,
            <br className="hidden md:block" />
            pensado exclusivamente para <span className="text-primary-600 font-bold">faxineiras e diaristas</span>.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

