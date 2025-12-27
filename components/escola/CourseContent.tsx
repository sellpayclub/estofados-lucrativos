'use client'

import { motion } from 'framer-motion'
import { Check, BookOpen } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../AnimatedSection'

const courseItems = [
  'Como criar velas perfeitas logo na primeira tentativa',
  'Mais de 200 modelos (tradicionais, luxuosas, virais e decorativas)',
  'Técnicas europeias de aromas e coloração',
  'Precificação profissional (pra nunca vender barato demais)',
  'Como vender rápido e gerar renda todo mês',
  'Lista de fornecedores até 90% mais baratos',
  'Método testado para faturar R$3.000+ por mês',
]

export default function CourseContent() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen size={18} />
            O QUE VOCÊ VAI APRENDER
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Na Escola Essência Criativa
          </h2>
        </div>

        <StaggerContainer className="space-y-4">
          {courseItems.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-slate-50 rounded-xl p-5 flex items-start gap-4 shadow-sm border border-slate-100"
              >
                <div className="bg-escola-pink-50 p-2 rounded-lg flex-shrink-0 mt-0.5">
                  <Check size={20} className="text-escola-pink-500" />
                </div>
                <span className="text-base md:text-lg font-medium text-slate-800">{item}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
