import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            DEMONSTRAÇÃO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Veja Como Funciona{" "}
            <span className="text-gradient-hero">Na Prática</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Assista a uma demonstração rápida e descubra como emitir NFS-e 
            em segundos, sem complicações.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-card group cursor-pointer">
            {/* Video Placeholder Background */}
            <div className="absolute inset-0 gradient-hero opacity-90" />
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Play Button */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />
                  <Button
                    variant="ghost"
                    size="lg"
                    className="relative w-20 h-20 rounded-full bg-primary-foreground/90 hover:bg-primary-foreground text-primary shadow-glow group-hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </Button>
                </div>
                
                <p className="mt-6 text-primary-foreground font-medium text-lg">
                  Clique para assistir
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  Duração: 2 minutos
                </p>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground text-xs font-medium">DEMO</span>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">30 seg</div>
              <p className="text-sm text-muted-foreground">Tempo para emitir uma nota</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">3 cliques</div>
              <p className="text-sm text-muted-foreground">Processo simplificado</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <p className="text-sm text-muted-foreground">Integrado com GOV.BR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
