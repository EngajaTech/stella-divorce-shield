
import React from 'react';

const Attorney: React.FC = () => {
  return (
    <section id="advogada" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="rounded-full overflow-hidden border-4 border-gold w-64 h-64 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1974" 
                alt="Dra. Stephanie Dell'Aquila" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-navy">Sobre a Advogada</h2>
            <div className="w-16 h-[2px] bg-gold mb-6"></div>
            
            <h3 className="text-xl font-semibold mb-4 text-navy">Stephanie Dell'Aquila</h3>
            <p className="mb-6">
              Advogada, psicanalista, MBA em Business Law.
            </p>
            <p className="text-gray-700">
              Mais de 10 anos de experiência em divórcios de alto padrão, com foco em proteção patrimonial, 
              mediação de conflitos e acolhimento humanizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attorney;
