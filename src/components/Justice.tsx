
import React from 'react';
import { Button } from '@/components/ui/button';

const Justice: React.FC = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contato');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="justica" className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Justiça e Recomeço</h2>
          <div className="golden-divider"></div>
          
          <div className="space-y-6 text-lg mb-12">
            <p>Você não precisa aceitar injustiças.</p>
            <p>Você não precisa abrir mão do que construiu.</p>
            <p>E, acima de tudo, você não está sozinho(a) nessa luta.</p>
            <p>A justiça não é apenas um direito – é um caminho para o recomeço.</p>
            <p>Com estratégia, sensibilidade e coragem, é possível virar a página sem perder sua essência, seu patrimônio e sua paz.</p>
          </div>
          
          <Button 
            onClick={scrollToContact} 
            className="bg-gold hover:bg-gold/90 text-navy font-medium px-8 py-6 text-lg rounded-sm"
          >
            Agendar Consulta Reservada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Justice;
