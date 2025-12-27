'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const faqs = [
  {
    question: 'Preciso aparecer para vender?',
    answer: 'Não. Muitas alunas vendem apenas pelo WhatsApp, sem necessidade de aparecer nas redes sociais.',
  },
  {
    question: 'Preciso investir muito?',
    answer: 'Não. Com R$50 você já consegue começar a produzir suas primeiras velas.',
  },
  {
    question: 'Funciona pra quem nunca fez artesanato?',
    answer: 'Sim. O método foi desenvolvido especialmente para iniciantes, ensinando tudo do zero.',
  },
  {
    question: 'Por quanto tempo tenho acesso?',
    answer: 'No Plano Completo, o acesso é vitalício. No Plano Iniciante, você tem acesso por 1 ano.',
  },
]

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full p-5 md:p-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-slate-800 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={24} className="text-escola-pink-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQEscola() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle size={18} />
            PERGUNTAS FREQUENTES
          </span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Tire suas dúvidas
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

