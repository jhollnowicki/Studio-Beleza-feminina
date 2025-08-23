import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star } from 'lucide-react';
import SEO from '@/components/SEO';

import ceraImg from '@/assets/cera.png';
import daySpaImg from '@/assets/day spa.png';
import sobrancelhaImg from '@/assets/desing-sombrancelha.png';
import escovaImg from '@/assets/escova.png';
import limpezaImg from '@/assets/limpeza.png';
import limpeza2Img from '@/assets/limpeza-2.png'; // caso queira variação
import hairTreatment from '@/assets/hidratação.png';
import makeNoivaImg from '@/assets/make-noiva.png';
import makeSocialImg from '@/assets/make-social.png';
import maoImg from '@/assets/mao.png';
import pesImg from '@/assets/pes.png';
import peelingImg from '@/assets/peeling.png';
import skinGlowImg from '@/assets/skinGlow.png';
import heroBg from '@/assets/hero-bg.png';


const Services = () => {
  const [activeCategory, setActiveCategory] = useState('facial');

  const categories = [
    { id: 'facial', name: 'Facial' },
    { id: 'cabelo', name: 'Cabelo' },
    { id: 'maquiagem', name: 'Maquiagem' },
    { id: 'maos-pes', name: 'Mãos & Pés' },
    { id: 'depilacao', name: 'Depilação' },
    { id: 'day-spa', name: 'Day Spa' },
  ];

  const services = {
    facial: [
      {
        name: "Limpeza de Pele Premium",
        description: "Purificação profunda com protocolo profissional para brilho e maciez imediata. Inclui análise de pele, extração, máscara personalizada e protetor solar.",
        duration: "60-90min",
        price: "A partir de R$ 150",
        benefits: ["Remoção de cravos", "Hidratação profunda", "Proteção solar", "Análise completa"],
        image: limpezaImg,
        objectPosition: "50% 60%" // puxa um pouco pra baixo
      },
      {
        name: "Skin Glow",
        description: "Hidratação intensiva e viço instantâneo para eventos especiais. Tratamento que proporciona brilho natural e pele radiante.",
        duration: "45min",
        price: "A partir de R$ 120",
        benefits: ["Hidratação intensa", "Brilho natural", "Efeito imediato", "Antioxidantes"],
        image: skinGlowImg
      },
      {
        name: "Peeling Químico",
        description: "Renovação celular para uma pele mais lisa e uniforme. Ideal para manchas, cicatrizes e sinais do tempo.",
        duration: "60min",
        price: "A partir de R$ 200",
        benefits: ["Renovação celular", "Uniformização", "Redução de manchas", "Anti-idade"],
        image: peelingImg,
        objectPosition: "50% 70%"
      }
    ],
    cabelo: [
      {
        name: "Hidratação Luxo",
        description: "Nutrição profunda com produtos premium para cabelos secos e danificados. Resultado com brilho espelhado e maciez incomparável.",
        duration: "60min",
        price: "A partir de R$ 120",
        benefits: ["Nutrição profunda", "Brilho intenso", "Maciez duradoura", "Reparação"],
        image: hairTreatment,
        objectPosition: "50% 20%"
      },
      {
        name: "Escova Modelada",
        description: "Acabamento sofisticado e duradouro com técnicas profissionais. Perfeito para eventos ou para manter o visual impecável.",
        duration: "40min",
        price: "A partir de R$ 80",
        benefits: ["Durabilidade", "Movimento natural", "Proteção térmica", "Brilho"],
        image: escovaImg,
        objectPosition: "50% 35%"
      }
    ],
    maquiagem: [
      {
        name: "Make Social",
        description: "Acabamento impecável para qualquer ocasião social. Maquiagem personalizada que valoriza sua beleza natural.",
        duration: "60min",
        price: "A partir de R$ 150",
        benefits: ["Longa duração", "Personalizada", "Produtos premium", "Retoque incluído"],
        image:makeSocialImg,
        objectPosition: "50% 30%"
      },
      {
        name: "Make Noiva",
        description: "Maquiagem especial para o dia mais importante, incluindo prova e acompanhamento durante o evento.",
        duration: "Pacote completo",
        price: "A partir de R$ 400",
        benefits: ["Prova inclusa", "Acompanhamento", "Kit retoque", "Duração estendida"],
        image: makeNoivaImg,
        objectPosition: "50% 0%"
      }
    ],
    'maos-pes': [
      {
        name: "Spa das Mãos",
        description: "Esfoliação, hidratação e acabamento perfeito. Tratamento completo que deixa as mãos macias e as unhas impecáveis.",
        duration: "45min",
        price: "A partir de R$ 60",
        benefits: ["Esfoliação", "Hidratação intensa", "Esmaltação", "Massagem"],
        image: maoImg,
        objectPosition: "50% 80%"
      },
      {
        name: "Spa dos Pés",
        description: "Relaxamento e renovação completa dos pés. Inclui escalda-pés, esfoliação, hidratação e massagem relaxante.",
        duration: "60min",
        price: "A partir de R$ 80",
        benefits: ["Escalda-pés", "Esfoliação", "Massagem relaxante", "Hidratação"],
        image:pesImg
      }
    ],
    depilacao: [
      {
        name: "Cera Egípcia",
        description: "Técnica suave e eficiente com cera de alta qualidade. Menor dor e resultado duradouro com cuidados pós-depilação.",
        duration: "Varia por região",
        price: "A partir de R$ 25",
        benefits: ["Menos dor", "Durabilidade", "Pele macia", "Cuidados inclusos"],
        image:ceraImg
      }
    ],
    'day-spa': [
      {
        name: "Day Spa Relax",
        description: "Combo personalizado com tratamentos faciais, corporais e relaxamento. Uma experiência completa de bem-estar.",
        duration: "3-4 horas",
        price: "A partir de R$ 350",
        benefits: ["Múltiplos tratamentos", "Relaxamento total", "Lanche incluso", "Ambiente exclusivo"],
        image: daySpaImg
      }
    ]
  };

  const handleBookService = (serviceName: string) => {
    const message = `Olá! Gostaria de agendar o serviço: ${serviceName}`;
    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <SEO
        title="Serviços de Beleza Premium - Beleza Feminina Curitiba"
        description="Conheça nossos tratamentos de beleza: estética facial, capilar, maquiagem, mãos & pés, depilação e day spa. Agende seu horário."
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Nossos Serviços</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências de beleza criadas especialmente para você, com produtos e técnicas de alta qualidade
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'luxury' : 'luxury-outline'}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services[activeCategory as keyof typeof services]?.map((service, index) => (
            <Card key={index} className="glass glow-hover group transition-all duration-300 hover:scale-105">
              <div className="aspect-video rounded-t-lg relative overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image as string}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ objectPosition: (service as any).objectPosition || "50% 50%" }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-subtle" />
                )}

                {/* overlay suave opcional */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="glass">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-gradient font-bold text-lg">
                    {service.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-primary">Benefícios:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="luxury"
                  className="w-full"
                  onClick={() => handleBookService(service.name)}
                >
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">Perguntas Frequentes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Como agendar?",
                answer: "Você pode agendar através do nosso WhatsApp ou preenchendo o formulário em nosso site. Responderemos rapidamente para confirmar seu horário."
              },
              {
                question: "Política de cancelamento?",
                answer: "Cancelamentos devem ser feitos com até 4 horas de antecedência. Cancelamentos de última hora podem estar sujeitos a taxa."
              },
              {
                question: "Quais marcas utilizam?",
                answer: "Trabalhamos apenas com produtos profissionais das melhores marcas do mercado, garantindo qualidade e segurança em todos os procedimentos."
              },
              {
                question: "Atende gestantes?",
                answer: "Sim! Temos protocolos específicos e seguros para gestantes. Consulte-nos sobre os procedimentos recomendados para cada fase da gravidez."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                <span className="text-gradient">Pronta para se cuidar?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Agende seu horário e descubra como podemos realçar sua beleza natural
              </p>
              <Button
                variant="luxury"
                size="lg"
                onClick={() => window.open('https://wa.me/5541999999999?text=Olá, gostaria de agendar um horário.', '_blank')}
              >
                Agendar pelo WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;