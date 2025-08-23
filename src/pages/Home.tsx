import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Award, Sparkles, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/hero-bg.jpg';
import limpeza from '@/assets/limpeza 2.png';
import hairTreatment from '@/assets/hidratação.png';
import sobramcelha from '@/assets/desing-sombrancelha.png';

const Home = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    hora: '',
    observacoes: '',
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppBooking = () => {
    if (!formData.nome || !formData.telefone || !formData.servico) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e serviço.",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Gostaria de agendar um horário:
    
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Serviço: ${formData.servico}
Data: ${formData.data || 'A definir'}
Horário: ${formData.hora || 'A definir'}
${formData.observacoes ? `Observações: ${formData.observacoes}` : ''}`;

    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(message)}`, '_blank');

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para nosso WhatsApp com os dados preenchidos.",
    });
  };

  const services = [
    'Limpeza de Pele Premium',
    'Skin Glow',
    'Hidratação Luxo',
    'Escova Modelada',
    'Make Social',
    'Spa das Mãos',
    'Spa dos Pés',
    'Depilação',
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Atendimento impecável! Saí de lá me sentindo uma nova mulher.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Ambiente luxuoso e profissionais extremamente qualificadas.",
      rating: 5,
    },
    {
      name: "Carla Santos",
      text: "Melhor experiência em tratamento estético que já tive!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 fade-in-up">
            <span className="text-gradient">Beleza de alto padrão</span>
            <br />
            <span className="text-foreground">para mulheres que</span>
            <br />
            <span className="text-gradient">exigem o melhor</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-in-right">
            Tratamentos premium de estética facial e corporal em um espaço pensado para você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="luxury"
              size="lg"
              onClick={() => window.open('https://wa.me/5541999999999?text=Olá, gostaria de agendar um horário.', '_blank')}
            >
              Agendar no WhatsApp
            </Button>
            <Button variant="luxury-outline" size="lg" asChild>
              <a href="#servicos">Ver Serviços</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Equipe Especializada", description: "Profissionais certificadas e experientes" },
              { icon: Sparkles, title: "Ambiente Luxuoso", description: "Espaço elegante e acolhedor" },
              { icon: Award, title: "Produtos Profissionais", description: "Marcas reconhecidas mundialmente" },
              { icon: Heart, title: "Resultados Comprovados", description: "Satisfação garantida em cada atendimento" },
            ].map((item, index) => (
              <Card key={index} className="glass glow-hover transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços em Evidência */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">Nossos Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experiências únicas de beleza e bem-estar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Limpeza de Pele Premium",
                description: "Purificação profunda com protocolo profissional para brilho e maciez imediata",
                duration: "60-90min",
                price: "A partir de R$ 150",
                image: limpeza,
                objectPosition: "50% 60%"
              },
              {
                title: "Design de Sobrancelhas",
                description: "Modelagem personalizada para valorizar seu olhar",
                duration: "45min",
                price: "A partir de R$ 80",
                image: sobramcelha,
                objectPosition: "50% 0%"
              },
              {
                title: "Hidratação Capilar",
                description: "Nutrição profunda com brilho espelhado e maciez duradoura",
                duration: "60min",
                price: "A partir de R$ 120",
                image: hairTreatment,
                objectPosition: "50% 10%"
              },
            ].map((service, index) => (
              <Card key={index} className="glass glow-hover group transition-all duration-300">
                <div className="aspect-video bg-gradient-subtle rounded-t-lg overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ objectPosition: service.objectPosition || "50% 50%" }}
                    />

                  ) : (
                    <div className="w-full h-full bg-gradient-subtle"></div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-medium">{service.duration}</span>
                    <span className="font-semibold text-gradient">{service.price}</span>
                  </div>
                  <Button variant="luxury-outline" className="w-full">
                    Agendar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">O que dizem nossas clientes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento Rápido */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">Agende seu horário</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e entraremos em contato
            </p>
          </div>
          <Card className="glass">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Seu nome *"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                />
                <Input
                  placeholder="Seu telefone *"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Select onValueChange={(value) => handleInputChange('servico', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Serviço *" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  value={formData.data}
                  onChange={(e) => handleInputChange('data', e.target.value)}
                />
                <Input
                  type="time"
                  value={formData.hora}
                  onChange={(e) => handleInputChange('hora', e.target.value)}
                />
              </div>
              <Textarea
                placeholder="Observações (opcional)"
                value={formData.observacoes}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
                className="mb-6"
              />
              <Button
                variant="luxury"
                size="lg"
                className="w-full"
                onClick={handleWhatsAppBooking}
              >
                Agendar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;