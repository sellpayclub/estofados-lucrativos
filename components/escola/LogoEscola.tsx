'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

interface LogoEscolaProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LogoEscola({ size = 'md', className = '' }: LogoEscolaProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-lg', subtext: 'text-xs' },
    md: { icon: 32, text: 'text-2xl', subtext: 'text-sm' },
    lg: { icon: 48, text: 'text-3xl md:text-4xl', subtext: 'text-base md:text-lg' },
  }

  return (
    <motion.div 
      className={`flex flex-col items-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-escola-pink-200 blur-xl opacity-50 rounded-full" />
        <div className="relative bg-gradient-to-br from-escola-pink-400 to-escola-pink-500 p-3 md:p-4 rounded-2xl shadow-lg">
          <Flame size={sizes[size].icon} className="text-white" strokeWidth={2} />
        </div>
      </div>
      <div className="text-center">
        <span className={`font-heading font-extrabold ${sizes[size].text} block`}>
          <span className="text-escola-pink-600">Escola</span>{' '}
          <span className="text-escola-gold-500">Essência</span>
        </span>
        <span className={`font-heading font-bold ${sizes[size].subtext} text-slate-600 tracking-wide`}>
          Criativa
        </span>
      </div>
    </motion.div>
  )
}

