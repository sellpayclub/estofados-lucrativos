import HeroEscola from '@/components/escola/HeroEscola'
import MarketOpportunity from '@/components/escola/MarketOpportunity'
import ProblemSectionEscola from '@/components/escola/ProblemSectionEscola'
import WhyCandlesWork from '@/components/escola/WhyCandlesWork'
import ProfitCalculator from '@/components/escola/ProfitCalculator'
import NoExperienceNeeded from '@/components/escola/NoExperienceNeeded'
import CourseContent from '@/components/escola/CourseContent'
import TargetAudienceEscola from '@/components/escola/TargetAudienceEscola'
import ImagineSection from '@/components/escola/ImagineSection'
import TestimonialsCarousel from '@/components/escola/TestimonialsCarousel'
import InstructorSection from '@/components/escola/InstructorSection'
import BonusesSection from '@/components/escola/BonusesSection'
import PlansSection from '@/components/escola/PlansSection'
import Guarantee30 from '@/components/escola/Guarantee30'
import FAQEscola from '@/components/escola/FAQEscola'
import FinalCTAEscola from '@/components/escola/FinalCTAEscola'

export default function EscolaCriativaPage() {
  return (
    <main className="overflow-hidden">
      <HeroEscola />
      <MarketOpportunity />
      <ProblemSectionEscola />
      <WhyCandlesWork />
      <ProfitCalculator />
      <NoExperienceNeeded />
      <CourseContent />
      <TargetAudienceEscola />
      <ImagineSection />
      <TestimonialsCarousel />
      <InstructorSection />
      <BonusesSection />
      <PlansSection />
      <Guarantee30 />
      <FAQEscola />
      <FinalCTAEscola />
      
      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="section-container text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Escola Essência Criativa. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia não é garantia de resultados futuros.
          </p>
        </div>
      </footer>
    </main>
  )
}
