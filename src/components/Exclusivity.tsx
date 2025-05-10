
import React from 'react';
import { Shield, Lock, FileText, Scale, Handshake, FileSearch } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-gold">
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-navy">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Exclusivity: React.FC = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Proteção total do seu patrimônio",
      description: "Estratégias avançadas para blindar empresas, investimentos e bens conquistados com esforço."
    },
    {
      icon: <Lock size={32} />,
      title: "Sigilo absoluto",
      description: "Sua privacidade é sagrada. Nenhuma informação é compartilhada sem sua autorização."
    },
    {
      icon: <FileText size={32} />,
      title: "Acolhimento real",
      description: "Advogada e psicanalista, preparada para ouvir, acolher e transformar dor em força."
    },
    {
      icon: <Scale size={32} />,
      title: "Visão de negócios",
      description: "Experiência em direito empresarial e mediação de conflitos de alto valor."
    },
    {
      icon: <Handshake size={32} />,
      title: "Resultados concretos",
      description: "Histórico de sucesso em divórcios que envolvem grandes patrimônios, empresas familiares e disputas de guarda."
    }
  ];

  return (
    <section id="exclusividade" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Exclusividade e Diferenciais</h2>
          <div className="golden-divider"></div>
          <p className="text-xl font-medium text-gray-700">Aqui, cada caso é tratado como único.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
