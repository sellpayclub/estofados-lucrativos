'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import LogoEscola from './LogoEscola'

export default function HeroEscola() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-12 bg-gradient-to-b from-escola-cream-50 via-white to-white">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-escola-pink-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-escola-gold-100 rounded-full blur-3xl opacity-40" />
      
      {/* Floating icons */}
      <motion.div 
        className="absolute top-32 right-8 md:right-20 text-escola-pink-400"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={32} />
      </motion.div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <LogoEscola size="lg" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-escola-pink-600 font-semibold mb-4"
        >
          🕯️ A escola de velas aromáticas mais completa do Brasil
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4 leading-tight text-balance"
        >
          Para quem quer ganhar dinheiro{' '}
          <span className="bg-gradient-to-r from-escola-pink-500 to-escola-pink-600 bg-clip-text text-transparent">
            trabalhando de casa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Aprenda a criar e vender velas aromáticas lucrativas, mesmo sem experiência.
          <br />
          <strong className="text-slate-800">Método simples, rápido e testado</strong> por centenas de mulheres comuns que transformaram tempo livre em renda extra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#planos"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-escola-pink-500 to-escola-pink-600 rounded-xl shadow-lg shadow-escola-pink-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            QUERO COMEÇAR AGORA
          </a>
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
            <ArrowDown size={28} className="text-escola-pink-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

