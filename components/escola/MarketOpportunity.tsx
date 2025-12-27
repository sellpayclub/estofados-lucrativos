'use client'

import { motion } from 'framer-motion'
import { TrendingUp, AlertTriangle } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

export default function MarketOpportunity() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-gradient-to-b from-white to-escola-cream-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-escola-pink-500 to-escola-pink-600 rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle size={18} />
            ATENÇÃO: O MOMENTO PERFEITO É AGORA
          </div>

          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
            O mercado de velas aromáticas no Brasil cresce mais de{' '}
            <span className="text-escola-gold-400">15% ao ano</span> — e está só começando.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
            {[
              'Velas aromáticas são o item nº1 em decoração e presentes',
              'Artesãs faturando entre R$3.000 e R$8.000/mês',
              'Produção rápida, baixo custo e alto lucro',
              'Pode ser feito 100% de casa, sem aparecer',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-start gap-3"
              >
                <div className="bg-escola-gold-400 rounded-full p-1 flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

