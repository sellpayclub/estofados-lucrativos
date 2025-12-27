'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

interface LogoEscolaProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LogoEscola({ size = 'md', className = '' }: LogoEscolaProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-lg' },
    md: { icon: 32, text: 'text-2xl' },
    lg: { icon: 40, text: 'text-3xl md:text-4xl' },
  }

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-escola-pink-400 blur-lg opacity-50 rounded-full" />
        <div className="relative bg-gradient-to-br from-escola-pink-400 to-escola-pink-500 p-2 md:p-3 rounded-xl">
          <Flame size={sizes[size].icon} className="text-white" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-heading font-extrabold ${sizes[size].text} tracking-tight`}>
          <span className="text-escola-pink-500">ESCOLA</span>
        </span>
        <span className={`font-heading font-bold ${size === 'lg' ? 'text-xl md:text-2xl' : 'text-sm'} -mt-1 tracking-widest text-slate-600`}>
          ESSÊNCIA CRIATIVA
        </span>
      </div>
    </motion.div>
  )
}
