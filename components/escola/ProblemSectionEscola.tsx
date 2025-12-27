'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../AnimatedSection'

const problems = [
  'Não pode sair de casa',
  'Já tentou vender algo e não funcionou',
  'Acha que precisa de "dom" ou experiência',
  'Tem medo de investir e perder dinheiro',
  'Não aguenta mais depender de salário baixo',
]

export default function ProblemSectionEscola() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-8">
          <span className="inline-block bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            😣 O PROBLEMA (E TALVEZ SEJA O SEU)
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Você quer ganhar dinheiro, mas…
          </h2>
        </div>

        <StaggerContainer className="space-y-4 mb-8">
          {problems.map((problem, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm border border-slate-100">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <X size={24} className="text-red-500" />
                </div>
                <span className="text-lg font-medium text-slate-700">{problem}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-escola-pink-500"
        >
          <p className="text-xl md:text-2xl text-center text-slate-700 mb-4 font-medium">
            💭 E fica pensando:
          </p>
          <p className="text-xl md:text-2xl text-center text-escola-pink-600 font-bold">
            "Será que existe algo simples, barato e que realmente funcione?"
          </p>
          <p className="text-xl md:text-2xl text-center text-slate-900 font-bold mt-4">
            E Sim, Existe! E são as velas aromáticas.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

