import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getWhatsAppUrl } from "./WhatsAppButton";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleSubmitAndRedirect = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    
    // Simulate sending data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Dados enviados!",
      description: "Você será redirecionado para o WhatsApp...",
    });
    
    // Delay before redirecting to WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    window.open(getWhatsAppUrl(), '_blank');
    
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-20 lg:py-28 bg-muted/50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
              CONTATO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Quer Saber Mais?{" "}
              <span className="text-gradient-hero">Fale Conosco</span>
            </h2>
            <p className="text-muted-foreground">
              Deixe seus dados e nossa equipe entrará em contato para tirar todas as suas dúvidas.
            </p>
          </div>

          {/* Form Card */}
          <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card">
            <form onSubmit={handleSubmitAndRedirect} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Dr. João Silva"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-background border-border focus:border-primary"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="joao@clinica.com.br"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-background border-border focus:border-primary"
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Número de Telefone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="h-12 bg-background border-border focus:border-primary"
                  maxLength={15}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Quero Ser Contatado
                  </>
                )}
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Consultoria especializada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
