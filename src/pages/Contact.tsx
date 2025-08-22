import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos marcados com *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // Mock API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou use o WhatsApp como alternativa.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppFallback = () => {
    const message = `Olá! Gostaria de entrar em contato:

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Assunto: ${formData.assunto}

Mensagem: ${formData.mensagem}`;

    window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const subjects = [
    'Agendamento',
    'Informações sobre serviços',
    'Orçamento personalizado',
    'Dúvidas gerais',
    'Sugestões',
    'Reclamações',
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <SEO 
        title="Contato - Beleza Feminina Estúdio de Beleza em Curitiba"
        description="Entre em contato conosco. Endereço: Av. Exemplo, 123 - Centro, Curitiba/PR. Telefone: (41) 99999-9999. Horários e como chegar."
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Entre em Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas e agendar seu momento de beleza
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  <span className="text-gradient">Envie sua mensagem</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu nome *"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                    />
                    <Input
                      type="email"
                      placeholder="Seu e-mail *"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu telefone *"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                    />
                    <Select onValueChange={(value) => handleInputChange('assunto', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    placeholder="Sua mensagem *"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    rows={6}
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                    <Button
                      type="button"
                      variant="luxury-outline"
                      size="lg"
                      onClick={handleWhatsAppFallback}
                      className="flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <Card className="glass glow-hover">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp Direto</h3>
                <p className="text-muted-foreground mb-4">
                  Fale conosco agora mesmo pelo WhatsApp
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5541999999999?text=Olá, gostaria de tirar uma dúvida.', '_blank')}
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold mb-6 text-gradient">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Endereço</h4>
                      <p className="text-muted-foreground">
                        Av. Exemplo, 123 – Centro<br />
                        Curitiba/PR – 80000-000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <button 
                        onClick={() => window.open('https://wa.me/5541999999999', '_blank')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (41) 99999-9999
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <a 
                        href="mailto:contato@belezafeminina.com.br"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@belezafeminina.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                      <div className="text-muted-foreground">
                        <p>Segunda a Sexta: 9:00 às 19:00</p>
                        <p>Sábado: 9:00 às 17:00</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Siga-nos nas redes sociais</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/belezafeminina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-lg hover:bg-primary hover:text-background transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/belezafeminina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-lg hover:bg-primary hover:text-background transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-subtle relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7250131779935!2d-49.27297278536917!3d-25.428171383763945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacf0d0a!2sCuritiba%2C%20State%20of%20Paran%C3%A1%2C%20Brazil!5e0!3m2!1sen!2sus!4v1635724321000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">Perguntas Frequentes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Como funciona a política de atrasos?",
                answer: "Recomendamos chegar 10 minutos antes do horário agendado. Atrasos superiores a 15 minutos podem resultar em reagendamento."
              },
              {
                question: "Quais formas de pagamento vocês aceitam?",
                answer: "Aceitamos dinheiro, cartão de débito/crédito (Visa, Mastercard), PIX e parcelamento em até 3x sem juros."
              },
              {
                question: "Oferecem estacionamento?",
                answer: "Sim, temos convênio com estacionamento na região. Consulte-nos sobre as opções disponíveis."
              },
              {
                question: "É necessário trazer algo para os tratamentos?",
                answer: "Não é necessário. Fornecemos todos os produtos e materiais necessários para os procedimentos."
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
      </div>
    </div>
  );
};

export default Contact;