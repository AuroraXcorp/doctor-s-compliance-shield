import { AlertCircle, FileWarning, DollarSign, Clock } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Fiscalização Intensificada",
    description: "A Receita Federal agora cruza dados de planos de saúde, cartões e Pix com declarações fiscais de profissionais de saúde.",
  },
  {
    icon: DollarSign,
    title: "Multas Pesadas",
    description: "Irregularidades podem resultar em multas de até R$ 50.000, suspensão do CRM e processos administrativos.",
  },
  {
    icon: Clock,
    title: "Prazo Curto",
    description: "O prazo para adequação às novas regras já está valendo. Cada dia sem regularização é um risco maior.",
  },
  {
    icon: AlertCircle,
    title: "Complexidade Burocrática",
    description: "O processo manual de emissão de NFS-e é confuso, demorado e sujeito a erros que podem custar caro.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
            ATENÇÃO MÉDICOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            O Que Mudou e Por Que Você{" "}
            <span className="text-destructive">Precisa Agir</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Em 2026, o governo implementou o Sistema Nacional de NFS-e, 
            obrigando todos os profissionais de saúde a emitir notas fiscais 
            eletrônicas de forma padronizada e integrada.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-accent" />
              <span className="font-display font-bold text-foreground">
                Você sabia?
              </span>
            </div>
            <p className="text-muted-foreground">
              Segundo dados da Receita Federal, <span className="font-semibold text-foreground">mais de 40% dos médicos autônomos</span> ainda 
              não estão adequados às novas exigências de NFS-e. Não seja parte dessa estatística.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
