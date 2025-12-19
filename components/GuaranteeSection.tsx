'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function GuaranteeSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-400 blur-xl opacity-30 rounded-full" />
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 p-6 rounded-2xl shadow-xl">
                    <Shield size={64} className="text-white" />
                  </div>
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                  Garantia Total de 7 Dias
                </h2>
                
                <p className="text-lg text-slate-600 mb-6">
                  Você não corre risco nenhum.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-primary-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      Se em até 7 dias você achar que o curso não é pra você
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-primary-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      Basta pedir o reembolso e devolvemos <strong>100% do seu dinheiro</strong>
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-primary-700 font-semibold">
                  Sem perguntas. Sem complicação.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

