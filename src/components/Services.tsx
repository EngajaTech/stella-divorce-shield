
import React from 'react';

const Services: React.FC = () => {
  const services = [
    "Divórcio litigioso e consensual de alto valor",
    "Planejamento pré-divórcio para empresários e executivos",
    "Blindagem patrimonial e proteção de empresas",
    "Acordos de guarda e pensão para filhos",
    "Mediação e negociação estratégica",
    "Atendimento 100% digital, com discrição total"
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Como Podemos Te Ajudar</h2>
            <div className="golden-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-5 border-l-4 border-gold bg-lightGray">
                <div className="w-3 h-3 rounded-full bg-gold mr-4"></div>
                <p className="font-medium text-navy">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
