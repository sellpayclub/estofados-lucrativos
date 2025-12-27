'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

// Imagens de velas para mostrar na seção
const showcaseImages = [
  '/images/escola/produtos/vela-7.png',
  '/images/escola/produtos/vela-8.png',
  '/images/escola/produtos/vela-9.png',
]

export default function MarketOpportunity() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect mais sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-escola-pink-100 to-slate-100 blur-3xl opacity-30 rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle size={18} />
              ATENÇÃO: O MOMENTO PERFEITO É AGORA
            </div>

            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
              O mercado de velas aromáticas no Brasil cresce mais de{' '}
              <span className="text-escola-pink-300">15% ao ano</span> — e está só começando.
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto mb-8">
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-start gap-3 border border-white/20"
                >
                  <div className="bg-escola-pink-400 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Galeria de velas */}
            <div className="mt-10">
              <p className="text-white/90 text-sm md:text-base mb-4">Exemplos de velas que você vai aprender a criar:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {showcaseImages.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-xl border-2 border-white/20 bg-white"
                  >
                    <img
                      src={image}
                      alt={`Vela exemplo ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
