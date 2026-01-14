import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Eu realmente preciso emitir NFS-e para cada consulta?",
    answer: "Sim. Desde janeiro de 2026, todos os profissionais de saúde autônomos ou que prestam serviços como pessoa física são obrigados a emitir Nota Fiscal de Serviços Eletrônica (NFS-e) para cada atendimento realizado, incluindo consultas, procedimentos e exames.",
  },
  {
    question: "O que acontece se eu não me adequar às novas regras?",
    answer: "As penalidades incluem multas que podem chegar a R$ 50.000 por infração, além de sanções administrativas junto ao CRM e possíveis processos por sonegação fiscal. A Receita Federal está realizando cruzamento de dados intensivo com operadoras de saúde.",
  },
  {
    question: "Quanto tempo leva para configurar o sistema?",
    answer: "A configuração inicial leva cerca de 15 minutos. Nossa equipe de onboarding irá guiá-lo passo a passo na conexão com seu certificado digital e integração com o sistema GOV.BR. Após isso, a emissão de cada nota leva menos de 30 segundos.",
  },
  {
    question: "Preciso de certificado digital?",
    answer: "Sim, o certificado digital (e-CPF ou e-CNPJ) é obrigatório para a emissão de NFS-e. Se você ainda não possui, podemos indicar certificadoras parceiras com preços especiais para nossos clientes.",
  },
  {
    question: "O sistema funciona para clínicas ou apenas médicos autônomos?",
    answer: "Nosso sistema atende tanto médicos autônomos quanto clínicas de todos os portes. Para clínicas, oferecemos planos com múltiplos usuários e relatórios consolidados.",
  },
  {
    question: "Como funciona o período de teste grátis?",
    answer: "Você tem 7 dias para testar todas as funcionalidades sem compromisso. Não pedimos cartão de crédito para iniciar o teste. Ao final, você decide se deseja continuar com um dos nossos planos.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Perguntas e Respostas
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre a obrigatoriedade da NFS-e e nosso sistema.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
