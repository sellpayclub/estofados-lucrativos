import Link from 'next/link'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-6">
        <h1 className="text-6xl font-heading font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-slate-600 mb-8">
          A página que você está procurando não existe.
        </p>
        <Link 
          href="/"
          className="btn-primary"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}

