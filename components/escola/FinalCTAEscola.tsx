'use client'

import { motion } from 'framer-motion'
import { ArrowRight, X, Check, Rocket } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'
import LogoEscola from './LogoEscola'

const continueList = [
  'Adiando seus sonhos',
  'Dependendo de salário baixo',
  'Sem perspectiva de mudança',
]

const changeList = [
  'Começar hoje com menos de R$20',
  'Mudar sua renda',
  'Trabalhar de casa no seu tempo',
]

export default function FinalCTAEscola() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Rocket size={18} />
            COMEÇE AGORA
          </span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            A escolha é sua
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6 md:p-8"
          >
            <p className="text-xl font-medium text-slate-600 mb-6">Você pode continuar:</p>
            <div className="space-y-4">
              {continueList.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-red-100 rounded-full p-1">
                    <X size={18} className="text-red-500" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-2xl p-6 md:p-8 border-2 border-primary-200"
          >
            <p className="text-xl font-medium text-primary-700 mb-6">Ou pode:</p>
            <div className="space-y-4">
              {changeList.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary-500 rounded-full p-1">
                    <Check size={18} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
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
            href="#planos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-escola-pink-500 hover:bg-escola-pink-400 text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg shadow-escola-pink-500/30 hover:shadow-xl transition-all"
          >
            🕯️ ESCOLA ESSÊNCIA CRIATIVA – INSCREVER-SE AGORA
            <ArrowRight size={24} />
          </motion.a>

          <div className="mt-8">
            <LogoEscola size="md" className="justify-center opacity-60" />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
