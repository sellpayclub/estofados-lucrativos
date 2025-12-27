'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

export default function Guarantee30() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Badge de garantia - criado com CSS */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex-shrink-0"
            >
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                {/* Badge circular com design profissional */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-full shadow-2xl flex flex-col items-center justify-center border-8 border-white">
                  {/* Borda decorativa interna */}
                  <div className="absolute inset-4 border-4 border-white/30 rounded-full" />
                  
                  {/* Número 30 */}
                  <div className="relative z-10 text-center">
                    <div className="text-7xl md:text-8xl font-heading font-extrabold text-white drop-shadow-lg">
                      30
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white/90 mt-2 tracking-wider">
                      DIAS
                    </div>
                  </div>

                  {/* Estrelas decorativas */}
                  <div className="absolute top-8 left-8 text-yellow-300 text-xl">★</div>
                  <div className="absolute top-8 right-8 text-yellow-300 text-xl">★</div>
                  <div className="absolute bottom-8 left-8 text-yellow-300 text-xl">★</div>
                  <div className="absolute bottom-8 right-8 text-yellow-300 text-xl">★</div>

                  {/* Texto "GARANTIA" na borda */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm md:text-base tracking-widest">
                      GARANTIA
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm md:text-base tracking-widest">
                      TOTAL
                    </div>
                  </div>
                </div>

                {/* Brilho decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full pointer-events-none" />
              </div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                Garantia Total de 30 Dias
              </h2>
              
              <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed font-medium">
                Se você entrar, assistir às aulas e não gostar, devolvemos <strong className="text-escola-pink-500">100% do seu dinheiro</strong>.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0" />
                  <span className="text-slate-800 text-base md:text-lg font-medium">Sem perguntas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0" />
                  <span className="text-slate-800 text-base md:text-lg font-medium">Sem burocracia</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0" />
                  <span className="text-slate-800 text-base md:text-lg font-medium">Devolução garantida</span>
                </div>
              </div>

              <div className="bg-escola-pink-50 rounded-xl p-4 border border-escola-pink-200">
                <p className="text-escola-pink-600 font-semibold text-lg md:text-xl">
                  O risco é todo nosso.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
