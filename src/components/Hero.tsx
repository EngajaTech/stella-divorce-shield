
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-navy text-white py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587614381634-068e513edb90?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ninguém tem o direito de destruir o que você construiu. Seu patrimônio, sua história e sua dignidade merecem ser protegidos.
          </h1>
          
          <div className="golden-divider"></div>
          
          <p className="text-lg md:text-xl mb-10">
            Divórcios complexos exigem mais do que advogados. Exigem estratégia, sensibilidade e coragem para lutar por justiça – sem abrir mão da sua privacidade.
          </p>
          
          <Button className="bg-gold hover:bg-gold/90 text-navy font-medium px-8 py-6 text-lg rounded-sm">
            Consulta Confidencial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
