import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Award, Users, Calendar, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';

import ambiente1 from '@/assets/local1.png';
import ambiente2 from '@/assets/local2.png';
import ambiente3 from '@/assets/local3.png';
import ambiente4 from '@/assets/local4.png';

const About = () => {
  const teamMembers = [
    {
      name: "Dra. Amanda Silva",
      specialty: "Estética Facial",
      certifications: ["Biomedicina", "Pós em Estética", "Harmonização Facial"],
      bio: "Especialista em tratamentos faciais com mais de 8 anos de experiência."
    },
    {
      name: "Carla Mendes",
      specialty: "Cabelos & Maquiagem",
      certifications: ["Colorimetria", "Maquiagem Profissional", "Hair Styling"],
      bio: "Profissional certificada em técnicas avançadas de cabelo e maquiagem."
    },
    {
      name: "Juliana Costa",
      specialty: "Estética Corporal",
      certifications: ["Massoterapia", "Drenagem Linfática", "Estética Corporal"],
      bio: "Especialista em tratamentos corporais e técnicas de relaxamento."
    }
  ];

  const milestones = [
    { year: "2018", event: "Fundação do Beleza Feminina" },
    { year: "2019", event: "Primeira certificação internacional" },
    { year: "2020", event: "Expansão dos serviços de day spa" },
    { year: "2021", event: "Parceria com marcas premium" },
    { year: "2022", event: "Renovação completa do espaço" },
    { year: "2024", event: "Mais de 5.000 clientes atendidas" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada cliente é única e merece um atendimento exclusivo e personalizado."
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em cada procedimento e atendimento."
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Utilizamos apenas produtos e equipamentos da mais alta qualidade."
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Construímos vínculos duradouros baseados na confiança e satisfação."
    }
  ];

  const brands = [
    "Avène", "La Roche-Posay", "Vichy", "Eucerin", "ISDIN", "Adcos"
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <SEO
        title="Quem Somos - Beleza Feminina Estúdio de Beleza Premium"
        description="Conheça a história, equipe e valores do Beleza Feminina. Mais de 5 anos cuidando da beleza feminina em Curitiba com excelência."
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Quem Somos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma história de dedicação, qualidade e amor pela beleza feminina
          </p>
        </div>

        {/* Manifesto */}
        <section className="mb-20">
          <Card className="glass">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  <span className="text-gradient">Nosso Manifesto</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  A <strong>Beleza Feminina</strong> nasceu do desejo de entregar excelência em tratamentos estéticos,
                  criando um espaço onde cada mulher se sinta única e especial. Acreditamos que a verdadeira beleza
                  vem de dentro, e nosso papel é realçar essa beleza natural através de cuidados personalizados e
                  técnicas de alta qualidade.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mais que um estúdio de beleza, somos um refúgio onde você pode relaxar, cuidar de si mesma e
                  sair renovada. Cada detalhe foi pensado para proporcionar uma experiência única e inesquecível.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">Nossa Jornada</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Marcos importantes da nossa história
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="glass glow-hover transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-heading font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">Nossos Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Os princípios que guiam nosso trabalho
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass glow-hover transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">Nossa Equipe</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Profissionais especializadas e apaixonadas pelo que fazem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass glow-hover transition-all duration-300">
                <div className="aspect-square bg-gradient-subtle rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary opacity-50" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.specialty}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Certificações:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ambiente */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                <span className="text-gradient">Nosso Ambiente</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Criamos um ambiente que combina elegância, conforto e tranquilidade.
                Cada detalhe foi cuidadosamente pensado para proporcionar uma experiência
                única de relaxamento e bem-estar.
              </p>
              <ul className="space-y-3">
                {[
                  "Ambientes climatizados e aromática",
                  "Música ambiente relaxante",
                  "Decoração elegante e acolhedora",
                  "Espaços privativos para cada tratamento",
                  "Área de descanso exclusiva"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[ambiente1, ambiente2, ambiente3, ambiente4].map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden group relative">
                  <img
                    src={img}
                    alt={`Ambiente ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">Nossas Parcerias</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Trabalhamos com as melhores marcas do mercado
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="glass px-6 py-3 rounded-lg">
                <span className="font-medium text-muted-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="glass">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                <span className="text-gradient">Venha nos conhecer</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estamos ansiosas para conhecer você e cuidar da sua beleza com todo carinho e profissionalismo que você merece.
              </p>
              <Button
                variant="luxury"
                size="lg"
                onClick={() => window.open('https://wa.me/5541xxxxxxxxx?text=Olá, gostaria de conhecer o estúdio e agendar uma visita.', '_blank')}
              >
                Agendar uma visita
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;