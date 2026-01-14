import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Maria Clara Santos",
    specialty: "Cardiologista • São Paulo, SP",
    content: "Eu estava apavorada com as novas regras. Não entendia nada de nota fiscal. Com o sistema, em 5 minutos já estava emitindo minhas notas corretamente.",
    rating: 5,
  },
  {
    name: "Dr. Roberto Mendes",
    specialty: "Ortopedista • Rio de Janeiro, RJ",
    content: "Meu contador adorou! Agora ele recebe tudo organizado automaticamente. Economizo pelo menos 2 horas por semana que gastava com burocracia.",
    rating: 5,
  },
  {
    name: "Dra. Fernanda Lima",
    specialty: "Dermatologista • Belo Horizonte, MG",
    content: "O suporte é excepcional. Quando tinha dúvidas sobre a legislação, me explicaram tudo. Sinto que tenho um parceiro cuidando da parte fiscal.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Médicos Que Já Se{" "}
            <span className="text-gradient-hero">Regularizaram</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que colegas de profissão estão dizendo sobre nossa solução.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-display font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "5.000+", label: "Médicos atendidos" },
            { number: "150k+", label: "Notas emitidas" },
            { number: "4.9/5", label: "Avaliação média" },
            { number: "99.9%", label: "Uptime do sistema" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gradient-hero">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
