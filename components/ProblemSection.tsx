'use client'

import { motion } from 'framer-motion'
import { Sofa, Armchair, BedDouble, AlertTriangle, Bug, Droplets, Wind } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const items = [
  { icon: Sofa, text: 'Sofá' },
  { icon: Armchair, text: 'Cadeiras estofadas' },
  { icon: BedDouble, text: 'Colchão' },
  { icon: Armchair, text: 'Poltronas' },
]

const problems = [
  { icon: Droplets, text: 'Estofados encardidos', color: 'text-amber-600 bg-amber-100' },
  { icon: AlertTriangle, text: 'Manchas', color: 'text-red-600 bg-red-100' },
  { icon: Wind, text: 'Cheiro ruim', color: 'text-purple-600 bg-purple-100' },
  { icon: Bug, text: 'Poeira e ácaros', color: 'text-slate-600 bg-slate-100' },
]

export default function ProblemSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-block bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            O PROBLEMA QUE NINGUÉM TE CONTA
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Todos os seus clientes têm:
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <item.icon size={40} className="mx-auto text-primary-600 mb-3" />
                <span className="font-medium text-slate-700">{item.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-center text-slate-700 mb-8 font-medium"
        >
          E quase ninguém sabe limpar isso direito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10"
        >
          <p className="text-lg text-center text-slate-600 mb-6">Resultado?</p>
          
          <div className="grid grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 p-4 rounded-xl ${problem.color.split(' ')[1]}`}
              >
                <problem.icon size={24} className={problem.color.split(' ')[0]} />
                <span className="font-medium text-slate-700">{problem.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="highlight-box"
        >
          <p className="text-lg md:text-xl text-slate-700">
            Os clientes <strong>PRECISAM</strong> desse serviço… mas não sabem a quem pedir ou vai ter que contratar alguém de fora para esse trabalho!
          </p>
          <p className="mt-4 text-xl md:text-2xl font-bold text-primary-700">
            E é aí que entra a grande oportunidade.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

