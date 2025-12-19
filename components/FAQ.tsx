'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    question: 'Preciso ter experiência?',
    answer: 'Não. O curso ensina do zero, de forma simples e prática. Qualquer pessoa consegue aprender e aplicar.',
  },
  {
    question: 'Preciso de máquina cara?',
    answer: 'Não. O método usa produtos acessíveis e técnicas manuais. Você não precisa investir em equipamentos caros.',
  },
  {
    question: 'Funciona mesmo para quem já tem poucos clientes?',
    answer: 'Sim. O curso ensina como conseguir mais indicações e aumentar sua base de clientes naturalmente.',
  },
  {
    question: 'Quando recebo acesso?',
    answer: 'Imediatamente após o pagamento. Você já pode começar a estudar no mesmo momento!',
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
          <ChevronDown size={24} className="text-primary-600" />
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <HelpCircle size={18} />
            PERGUNTAS FREQUENTES
          </motion.span>
          
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

