'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Star } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const achievements = [
  { icon: Award, text: 'Dona de marcas vendidas em todo o Brasil' },
  { icon: TrendingUp, text: 'Aparições na TV' },
  { icon: Users, text: '+40 mil seguidoras' },
  { icon: Star, text: 'Centenas de alunas com resultados reais' },
]

export default function InstructorSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-gradient-to-b from-white to-escola-cream-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-escola-pink-100 text-escola-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            👩‍🏫 QUEM VAI TE ENSINAR
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-escola-pink-400 to-escola-pink-500 rounded-full mb-6">
                <span className="text-white text-3xl font-bold">MS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                Mariana Silva
              </h3>
              <p className="text-lg text-escola-pink-600 font-medium">
                Criadora da Escola Essência Criativa
              </p>
            </div>

            <div className="bg-escola-cream-50 rounded-2xl p-6 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                Começou como caixa de supermercado com apenas <strong className="text-escola-pink-600">R$50</strong>, 
                descobriu um método europeu de velas aromáticas e adaptou para a realidade brasileira.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-escola-pink-50 rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="bg-escola-pink-500 p-3 rounded-lg">
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

