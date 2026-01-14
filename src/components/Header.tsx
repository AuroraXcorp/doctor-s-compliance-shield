import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-foreground/10 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-display font-bold text-primary-foreground">
              NFS-e Médico
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
              Preços
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Entrar
            </Button>
            <Button variant="urgent" size="sm">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
                Como Funciona
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
                Preços
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
                Depoimentos
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-primary-foreground/10">
                <Button variant="heroOutline" className="w-full">
                  Entrar
                </Button>
                <Button variant="urgent" className="w-full">
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
