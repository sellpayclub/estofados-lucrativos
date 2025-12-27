'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const plan1 = {
  name: 'INICIANTE',
  price: 'R$10,00',
  period: 'pagamento único',
  features: [
    'Aulas essenciais',
    'Passo a passo completo',
    'Acesso por 1 ano aos conteúdos',
  ],
  popular: false,
  checkoutLink: '#',
}

const plan2 = {
  name: 'COMPLETO',
  price: 'R$19,90',
  period: 'pagamento único',
  features: [
    'Treinamento completo',
    '+200 modelos de velas',
    'Método Vendas Rápidas',
    'Precificação profissional',
    'Lista de fornecedores secretos',
    'Suporte no WhatsApp com a Professora',
    'ACESSO VITALÍCIO',
  ],
  popular: true,
  checkoutLink: '#',
}

export default function PlansSection() {
  return (
    <AnimatedSection id="planos" className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎁 ESCOLHA SEU PLANO
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Plan 1 - Iniciante */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-slate-200"
          >
            <div className="text-center mb-6">
              <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                PLANO 1 – INICIANTE
              </span>
              <div className="mb-4">
                <p className="text-slate-500 text-sm mb-2">{plan1.period} de:</p>
                <p className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900">
                  {plan1.price}
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {plan1.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan1.checkoutLink}
              className="block w-full bg-slate-700 hover:bg-slate-800 text-white text-center font-bold py-4 rounded-xl transition-colors"
            >
              ESCOLHER ESTE PLANO
            </a>
          </motion.div>

          {/* Plan 2 - Completo (Popular) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-escola-pink-400"
          >
            {/* Badge Popular */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-escola-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                <Star size={14} fill="currentColor" />
                MAIS VENDIDO
              </span>
            </div>

            <div className="text-center mb-6 mt-2">
              <span className="inline-block bg-escola-pink-50 text-escola-pink-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                🔥 PLANO 2 – COMPLETO
              </span>
              <div className="mb-4">
                <p className="text-slate-500 text-sm mb-2">{plan2.period}:</p>
                <p className="text-4xl md:text-5xl font-heading font-extrabold text-escola-pink-500">
                  {plan2.price}
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {plan2.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-escola-pink-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan2.checkoutLink}
              className="block w-full bg-escola-pink-500 hover:bg-escola-pink-400 text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-escola-pink-500/30 transition-all"
            >
              ESCOLHER ESTE PLANO
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
