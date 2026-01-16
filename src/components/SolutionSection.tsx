import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  Clock, 
  FileCheck, 
  Smartphone, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Emissão Automática",
    description: "NFS-e gerada automaticamente após cada consulta ou procedimento.",
  },
  {
    icon: Shield,
    title: "Integração GOV.BR",
    description: "Conexão direta e oficial com o sistema da Receita Federal.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Reduza de 30 minutos para 30 segundos a emissão de cada nota.",
  },
  {
    icon: FileCheck,
    title: "Relatórios Completos",
    description: "Dashboard com todos os dados fiscais organizados para seu contador.",
  },
  {
    icon: Smartphone,
    title: "Acesso Mobile",
    description: "Emita notas pelo celular, tablet ou computador, onde estiver.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Especializado",
    description: "Equipe treinada em legislação fiscal para profissionais de saúde.",
  },
];

const benefits = [
  "Conformidade total com as novas regras fiscais de 2026",
  "Zero risco de multas e sanções por irregularidades",
  "Integração com sistemas de agendamento e prontuário",
  "Backup automático de todas as notas emitidas",
  "Atualização automática conforme mudanças na legislação",
];

const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
            A SOLUÇÃO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Sistema de NFS-e Feito{" "}
            <span className="text-gradient-hero">Para Médicos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvemos uma plataforma pensada especificamente para a rotina 
            do profissional de saúde. Simples, rápida e 100% em conformidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              DEMONSTRAÇÃO
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Veja Como Funciona{" "}
              <span className="text-gradient-hero">Na Prática</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Assista a uma demonstração rápida e descubra como emitir NFS-e 
              em segundos, sem complicações.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-card group cursor-pointer">
            <div className="absolute inset-0 gradient-hero opacity-90" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
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

        {/* Pricing Card */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
              INVESTIMENTO
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Escolha o melhor plano para você
            </h3>
          </div>
          
          <div className="p-8 lg:p-12 rounded-3xl gradient-hero shadow-glow">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Benefits List */}
              <div>
                <h3 className="text-2xl font-display font-bold text-primary-foreground mb-6">
                  O que você ganha:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing CTA */}
              <div className="text-center">
                <div className="p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold mb-4">
                    MAIS POPULAR
                  </div>
                  <p className="text-sm text-primary-foreground/70 mb-2">
                    Plano Profissional
                  </p>
                  <div className="mb-2">
                    <span className="text-lg text-primary-foreground/50 line-through">
                      R$ 249
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-display font-bold text-primary-foreground">
                      R$ 149
                    </span>
                    <span className="text-primary-foreground/70">/mês</span>
                  </div>
                  <Button variant="urgent" size="lg" className="w-full group mb-4">
                    Começar Teste Grátis
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <div className="space-y-2 text-xs text-primary-foreground/60">
                    <p>✓ 7 dias grátis para testar</p>
                    <p>✓ Sem taxa de adesão</p>
                    <p>✓ Cancele quando quiser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
