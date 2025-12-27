import Hero from '@/components/Hero'
import PainSection from '@/components/PainSection'
import OpportunitySection from '@/components/OpportunitySection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import EarningsSection from '@/components/EarningsSection'
import ModulesSection from '@/components/ModulesSection'
import TargetSection from '@/components/TargetSection'
import BenefitsSection from '@/components/BenefitsSection'
import GuaranteeSection from '@/components/GuaranteeSection'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <PainSection />
      <OpportunitySection />
      <ProblemSection />
      <SolutionSection />
      <EarningsSection />
      <ModulesSection />
      <TargetSection />
      <BenefitsSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQ />
      <FinalCTA />
      
      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="section-container text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Estofados Lucrativos. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia não é garantia de resultados futuros.
          </p>
        </div>
      </footer>
    </main>
  )
}


