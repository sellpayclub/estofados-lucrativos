'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

// Placeholder - você pode substituir pelas imagens reais depois
const testimonials = [
  { id: 1, image: '/testimonials/testimonial-1.jpg', alt: 'Depoimento 1' },
  { id: 2, image: '/testimonials/testimonial-2.jpg', alt: 'Depoimento 2' },
  { id: 3, image: '/testimonials/testimonial-3.jpg', alt: 'Depoimento 3' },
  { id: 4, image: '/testimonials/testimonial-4.jpg', alt: 'Depoimento 4' },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-escola-pink-100 text-escola-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageSquare size={18} />
            Veja o que dizem as nossas alunas
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Depoimentos Reais
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  {/* Placeholder - substitua por Image quando tiver as imagens */}
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <p className="text-slate-500">Depoimento {testimonials[currentIndex].id}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-escola-pink-600" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="text-escola-pink-600" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-escola-pink-500 w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

