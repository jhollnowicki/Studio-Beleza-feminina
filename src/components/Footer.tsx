import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = "Olá, vim pelo site Beleza Feminina e gostaria de tirar uma dúvida.";
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-gradient">
              Beleza Feminina
            </h3>
            <p className="text-muted-foreground text-sm">
              Experiências de beleza criadas para mulheres que exigem o melhor.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/belezafeminina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/belezafeminina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Av. Exemplo, 123 – Centro</p>
                  <p>Curitiba/PR – 80000-000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <button 
                  onClick={handleWhatsApp}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (41) 99999-9999
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@belezafeminina.com.br"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@belezafeminina.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
            <div className="flex items-start space-x-3">
              <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Segunda a Sexta</p>
                <p className="font-medium">9:00 às 19:00</p>
                <p>Sábado</p>
                <p className="font-medium">9:00 às 17:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Beleza Feminina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;