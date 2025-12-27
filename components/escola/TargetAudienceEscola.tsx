'use client'

import { motion } from 'framer-motion'
import { Check, X, Users } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const forWhom = [
  'Mulheres desempregadas',
  'Mães que precisam trabalhar de casa',
  'Mulheres CLT cansadas da rotina',
  'Artesãs iniciantes',
  'Quem quer renda extra sem aparecer',
]

const notForWhom = 'Não é para quem procura dinheiro fácil sem fazer nada.'

export default function TargetAudienceEscola() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-escola-pink-100 text-escola-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users size={18} />
            PRA QUEM É ESSE TREINAMENTO?
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-escola-cream-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-escola-pink-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-escola-pink-500 p-2 rounded-lg">
                <Check size={24} className="text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">É para você se:</span>
            </div>
            
            <div className="space-y-4">
              {forWhom.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-escola-pink-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-escola-pink-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
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
            
            <div className="flex items-start gap-3">
              <div className="bg-red-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                <X size={16} className="text-red-500" />
              </div>
              <span className="text-slate-600">{notForWhom}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

