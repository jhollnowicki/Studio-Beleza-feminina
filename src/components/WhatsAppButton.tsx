import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const message = "Olá, vim pelo site Beleza Feminina e gostaria de agendar um horário.";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsApp}
      variant="whatsapp"
      size="lg"
      className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 p-0 shadow-elegant animate-glow"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;