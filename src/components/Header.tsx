
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <a href="#" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-navy">
              Dell<span className="text-gold">'</span>Aquila Advocacia
            </h1>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center">
            <Phone size={18} className="text-gold mr-2" />
            <span className="text-sm">(11) 3462-9939</span>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="text-gold mr-2" />
            <span className="text-sm">contato@dellaquilaadvocacia.com.br</span>
          </div>
          <div className="flex items-center">
            <MapPin size={18} className="text-gold mr-2" />
            <span className="text-sm">São Paulo, SP</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
