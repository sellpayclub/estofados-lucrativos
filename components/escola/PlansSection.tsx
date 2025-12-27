'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const plan1Features = [
  'Aulas essenciais',
  'Passo a passo completo',
  'Acesso por 1 ano aos conteúdos',
]

const plan2Features = [
  'Treinamento completo',
  '+200 modelos de velas',
  'Método Vendas Rápidas',
  'Precificação profissional',
  'Lista de fornecedores secretos',
  'Suporte no WhatsApp com a Professora',
  'ACESSO VITALÍCIO',
]

export default function PlansSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎁 ESCOLHA SEU PLANO
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Planos Disponíveis
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Plano 1 - Iniciante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
                PLANO 1 – INICIANTE
              </h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
                  R$ 10,00
                </span>
                <span className="text-slate-600 text-lg ml-2">pagamento único</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan1Features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-escola-pink-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-base md:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://payt.site/nNC7eB3"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl text-center text-lg md:text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Escolher Plano Iniciante
            </a>
          </motion.div>

          {/* Plano 2 - Completo (Mais Vendido) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-escola-pink-500 to-escola-pink-600 rounded-2xl p-8 shadow-2xl border-4 border-escola-pink-400 relative overflow-hidden"
          >
            {/* Badge Mais Vendido */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star size={14} fill="currentColor" />
              MAIS VENDIDO
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                PLANO 2 – COMPLETO
              </h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                  R$ 19,90
                </span>
                <span className="text-white/90 text-lg ml-2">pagamento único</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan2Features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium text-base md:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://payt.site/ODCdAy3"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white hover:bg-slate-50 text-escola-pink-600 font-bold py-4 px-6 rounded-xl text-center text-lg md:text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Escolher Plano Completo
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
