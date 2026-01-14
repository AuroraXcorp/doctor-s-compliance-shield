import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Urgency Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary-foreground">
              Novas regras em vigor desde Janeiro/2026
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-6">
            O Governo Está{" "}
            <span className="relative">
              <span className="relative z-10">de Olho</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/40 -z-0" />
            </span>{" "}
            em Você, Doutor(a)
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/85 mb-4 font-medium">
            As sanções para médicos que não emitirem NFS-e corretamente podem ser{" "}
            <span className="font-bold text-accent">severas</span>.
          </p>

          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Com nosso sistema de Nota Fiscal Eletrônica integrado ao GOV.BR, você se 
            protege de multas e mantém sua prática médica em conformidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="urgent" size="xl" className="group">
              Quero Me Regularizar Agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Ver Como Funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Dados criptografados</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Integração oficial GOV.BR</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span>+5.000 médicos atendidos</span>
            </div>
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gradient-glass rounded-2xl p-6 shadow-lg animate-float">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-display font-bold text-primary">R$ 50mil</div>
                <div className="text-sm text-muted-foreground">Multa máxima por infração</div>
              </div>
              <div className="md:border-x border-border">
                <div className="text-3xl font-display font-bold text-destructive">72h</div>
                <div className="text-sm text-muted-foreground">Prazo para regularização</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Conformidade garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
