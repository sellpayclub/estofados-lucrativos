'use client'

import { motion } from 'framer-motion'
import { ArrowRight, X, Check, Rocket } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import Logo from './Logo'

const continueList = [
  'Trabalhando muito',
  'Ganhando pouco',
  'Sem perspectiva de crescer',
]

const changeList = [
  'Aprender um serviço simples',
  'Ganhar mais com os mesmos clientes',
  'Investir apenas R$ 49,90 em você',
]

export default function FinalCTA() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Rocket size={18} />
            AGORA É COM VOCÊ
          </motion.span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            A escolha é sua
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 rounded-2xl p-6 md:p-8"
          >
            <p className="text-lg font-medium text-slate-600 mb-6">Você pode continuar:</p>
            <div className="space-y-4">
              {continueList.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-red-100 rounded-full p-1">
                    <X size={16} className="text-red-500" />
                  </div>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 md:p-8 border-2 border-primary-200"
          >
            <p className="text-lg font-medium text-primary-700 mb-6">Ou pode:</p>
            <div className="space-y-4">
              {changeList.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary-500 rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://pay.cakto.com.br/5mch446_693546"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg shadow-primary-600/30 hover:shadow-xl transition-shadow"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight size={24} />
          </motion.a>

          <div className="mt-8">
            <Logo size="md" className="justify-center opacity-60" />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

