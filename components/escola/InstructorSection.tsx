'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Star, User } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'
import { useState } from 'react'

const achievements = [
  { icon: Award, text: 'Dona de marcas vendidas em todo o Brasil' },
  { icon: TrendingUp, text: 'Aparições na TV' },
  { icon: Users, text: '+40 mil seguidoras' },
  { icon: Star, text: 'Centenas de alunas com resultados reais' },
]

export default function InstructorSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            👩‍🏫 QUEM VAI TE ENSINAR
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Foto da instrutora */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                <div className="absolute inset-0 bg-escola-pink-100 rounded-full blur-xl opacity-50" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex items-center justify-center">
                  {imageError ? (
                    <User size={96} className="text-slate-400" />
                  ) : (
                    <img
                      src="/images/escola/instrutora/mariana-silva.jpg"
                      alt="Mariana Silva - Criadora da Escola Essência Criativa"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                  Mariana Silva
                </h3>
                <p className="text-lg md:text-xl text-escola-pink-500 font-medium mb-4">
                  Criadora da Escola Essência Criativa
                </p>
                <div className="bg-white rounded-xl p-4 md:p-6">
                  <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium">
                    Começou como caixa de supermercado com apenas <strong className="text-escola-pink-500">R$50</strong>, 
                    descobriu um método europeu de velas aromáticas e adaptou para a realidade brasileira.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm"
                >
                  <div className="bg-escola-pink-50 p-3 rounded-lg">
                    <achievement.icon size={24} className="text-escola-pink-500" />
                  </div>
                  <span className="text-slate-800 font-medium text-base md:text-lg">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
