'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, TrendingUp, Clock } from 'lucide-react'
import Logo from './Logo'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40" />
      
      {/* Floating icons */}
      <motion.div 
        className="absolute top-32 right-8 md:right-20 text-primary-400"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-8 md:left-20 text-accent-400"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <TrendingUp size={28} />
      </motion.div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Logo size="lg" className="justify-center" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4 leading-tight text-balance"
        >
          Aprenda a Ganhar de{' '}
          <span className="gradient-text">R$ 7.000 a R$ 9.000</span>{' '}
          EXTRAS por mês
        </motion.h1>

        {/* Video VSL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-[400px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div style={{ position: 'relative', paddingTop: '177.34%' }}>
            <iframe
              frameBorder="0"
              allowFullScreen
              src="https://scripts.converteai.net/23a12c68-c1f4-4484-8d24-176d22e3e1c7/players/69454ad925bdf7820c024356/v4/embed.html"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              referrerPolicy="origin"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Oferecendo um serviço simples de limpeza de estofados para os mesmos clientes que você já atende — 
          <strong className="text-slate-800"> sem trabalhar mais horas</strong> e 
          <strong className="text-slate-800"> sem encher sua agenda.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {[
            { icon: Clock, text: 'Curso online passo a passo' },
            { icon: Sparkles, text: 'Scripts prontos' },
            { icon: TrendingUp, text: 'Modelo de proposta' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-primary-100">
              <item.icon size={18} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://pay.cakto.com.br/5mch446_693546"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-10 py-5 inline-block"
          >
            QUERO COMEÇAR AGORA
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Por apenas <span className="font-bold text-primary-600">R$ 49,90</span> · Acesso imediato
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={28} className="text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

