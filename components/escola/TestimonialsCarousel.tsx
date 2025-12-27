'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare, Image as ImageIcon } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

// Array de depoimentos - atualize quando adicionar as imagens
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
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play apenas se tiver imagens carregadas
  useEffect(() => {
    if (loadedImages.size === 0) return
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [loadedImages.size])

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id))
  }

  const handleImageError = (id: number) => {
    setImageErrors(prev => new Set(prev).add(id))
  }

  const currentTestimonial = testimonials[currentIndex]
  const hasError = imageErrors.has(currentTestimonial.id)
  const hasLoaded = loadedImages.has(currentTestimonial.id)
  const showPlaceholder = hasError || !hasLoaded

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
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {showPlaceholder ? (
                  <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
                    <div className="text-center max-w-md">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-escola-pink-100 rounded-full mb-4">
                        <ImageIcon size={40} className="text-escola-pink-500" />
                      </div>
                      <p className="text-lg md:text-xl text-slate-700 font-semibold mb-2">
                        Depoimento {currentTestimonial.id}
                      </p>
                      <p className="text-sm md:text-base text-slate-500 mb-4">
                        Adicione a imagem em:
                      </p>
                      <p className="text-xs md:text-sm text-slate-400 font-mono bg-white p-3 rounded border border-slate-200 shadow-sm">
                        {currentTestimonial.image}
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-contain p-4"
                    onLoad={() => handleImageLoad(currentTestimonial.id)}
                    onError={() => handleImageError(currentTestimonial.id)}
                    loading="lazy"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
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
                      : loadedImages.has(testimonials[index].id)
                      ? 'bg-escola-pink-300 w-2'
                      : 'bg-white/50 hover:bg-white/75 w-2'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Indicador de quantas imagens foram carregadas */}
          {loadedImages.size > 0 && loadedImages.size < testimonials.length && (
            <p className="text-center text-sm text-slate-500 mt-4">
              {loadedImages.size} de {testimonials.length} depoimentos carregados
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
