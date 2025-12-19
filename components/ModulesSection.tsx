'use client'

import { motion } from 'framer-motion'
import { Droplets, MessageSquare, FileText, Rocket, Check } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const modules = [
  {
    icon: Droplets,
    number: '01',
    title: 'Limpeza de Estofados do Zero',
    color: 'from-blue-500 to-blue-600',
    items: [
      'Produtos certos (baratos e fáceis de achar)',
      'Como limpar sofá, colchão e cadeiras',
      'Técnicas simples e eficientes',
      'O que NÃO fazer (erros que estragam o estofado)',
    ],
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Como Vender o Serviço',
    color: 'from-purple-500 to-purple-600',
    items: [
      'Script pronto para mandar no WhatsApp',
      'Como oferecer sem parecer chata ou insistente',
      'Como cobrar o preço certo',
    ],
  },
  {
    icon: FileText,
    number: '03',
    title: 'Modelo de Proposta Pronta',
    color: 'from-orange-500 to-orange-600',
    items: [
      'Proposta profissional',
      'É só copiar, colar e usar',
    ],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Como Conseguir Ainda Mais Clientes',
    color: 'from-primary-500 to-primary-600',
    items: [
      'Como seus próprios clientes indicam você',
      'Como aumentar a procura pelo serviço',
    ],
  },
]

export default function ModulesSection() {
  return (
    <AnimatedSection className="py-10 md:py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            O QUE VOCÊ VAI APRENDER
          </motion.span>
          
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Conteúdo do Curso
          </h2>
        </div>

        <StaggerContainer className="space-y-4">
          {modules.map((module, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${module.color} p-5 flex items-center gap-4`}>
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <module.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <span className="text-white/70 text-sm font-medium">Módulo {module.number}</span>
                    <h3 className="text-lg md:text-xl font-bold text-white">{module.title}</h3>
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <ul className="space-y-3">
                    {module.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}

