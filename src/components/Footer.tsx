
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 border-b border-gold pb-2">
              Dell<span className="text-gold">'</span>Aquila Advocacia
            </h3>
            <p className="mb-4">
              OAB 425.483
            </p>
            <p>
              Atendimento reservado em São Paulo, ABC e online para todo o Brasil.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 border-b border-gold pb-2">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={16} className="text-gold mr-3" />
                <span>(11) 3462-9939</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-gold mr-3" />
                <span>contato@dellaquilaadvocacia.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-gold mr-3" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 border-b border-gold pb-2">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li>Divórcio de alto padrão</li>
              <li>Direito de família</li>
              <li>Proteção patrimonial</li>
              <li>Guarda de filhos</li>
              <li>Mediação familiar</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 border-b border-gold pb-2">Horário de Atendimento</h3>
            <p className="mb-4">Segunda a Sexta</p>
            <p className="mb-4">9h às 18h</p>
            <p>Consultas com agendamento prévio</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dell'Aquila Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
