import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 lg:p-16 shadow-glow">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

            <div className="relative text-center">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-primary-foreground">
                  Oferta por tempo limitado
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                Não Espere Ser Notificado
              </h2>

              <p className="text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto">
                Regularize sua situação fiscal hoje e tenha tranquilidade para 
                focar no que realmente importa: cuidar dos seus pacientes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Button variant="urgent" size="xl" className="group">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => {
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Falar com Consultor
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Suporte humanizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
