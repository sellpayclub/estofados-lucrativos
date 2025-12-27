'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

// Array de depoimentos - quando adicionar as imagens, elas aparecerão automaticamente
const testimonials = [
  { id: 1, image: '/images/escola/depoimentos/depoimento-1.jpg', alt: 'Depoimento 1' },
  { id: 2, image: '/images/escola/depoimentos/depoimento-2.jpg', alt: 'Depoimento 2' },
  { id: 3, image: '/images/escola/depoimentos/depoimento-3.jpg', alt: 'Depoimento 3' },
  { id: 4, image: '/images/escola/depoimentos/depoimento-4.jpg', alt: 'Depoimento 4' },
  { id: 5, image: '/images/escola/depoimentos/depoimento-5.jpg', alt: 'Depoimento 5' },
  { id: 6, image: '/images/escola/depoimentos/depoimento-6.jpg', alt: 'Depoimento 6' },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasImages, setHasImages] = useState(false)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Verificar se existem imagens
  useEffect(() => {
    const checkImages = async () => {
      try {
        const img = new Image()
        img.src = testimonials[0].image
        img.onload = () => setHasImages(true)
        img.onerror = () => setHasImages(false)
      } catch {
        setHasImages(false)
      }
    }
    checkImages()
  }, [])

  // Auto-play apenas se tiver imagens
  useEffect(() => {
    if (!hasImages) return
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [hasImages])

  return (
    <AnimatedSection className="py-10 md:py-16 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageSquare size={18} />
            Veja o que dizem as nossas alunas
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-900">
            Depoimentos Reais
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200">
            {!hasImages ? (
              // Placeholder enquanto não tem imagens
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <MessageSquare size={64} className="text-slate-300 mx-auto mb-4" />
                  <p className="text-lg md:text-xl text-slate-700 font-semibold mb-2">
                    Adicione as imagens dos depoimentos
                  </p>
                  <p className="text-sm md:text-base text-slate-500">
                    Coloque os screenshots do WhatsApp em:
                  </p>
                  <p className="text-xs md:text-sm text-slate-400 mt-2 font-mono bg-slate-50 p-2 rounded">
                    /public/images/escola/depoimentos/
                  </p>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].alt}
                    className="w-full h-full object-contain p-4"
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {/* Navigation buttons - só aparece se tiver imagens */}
            {hasImages && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={24} className="text-slate-600" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
                  aria-label="Próximo"
                >
                  <ChevronRight size={24} className="text-slate-600" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-escola-pink-500 w-8'
                          : 'bg-white/50 hover:bg-white/75 w-2'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
