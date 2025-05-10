
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="section-padding bg-lightGray">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy">Consulta Confidencial</h2>
            <div className="golden-divider"></div>
            <p className="text-lg text-gray-700">
              Preencha o formulário abaixo para agendar uma consulta reservada. 
              Todas as informações são tratadas com sigilo absoluto.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-sm shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-navy">Nome</label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Seu nome completo" 
                  required 
                  className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-navy">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Seu email" 
                  required 
                  className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-navy">Telefone</label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Seu telefone" 
                required 
                className="w-full border-gray-300 focus:border-gold focus:ring-gold"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-navy">Assunto</label>
              <Input 
                id="subject" 
                type="text" 
                placeholder="Assunto da consulta" 
                required 
                className="w-full border-gray-300 focus:border-gold focus:ring-gold"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-navy">Mensagem</label>
              <Textarea 
                id="message" 
                placeholder="Descreva brevemente sua situação" 
                rows={5} 
                required 
                className="w-full border-gray-300 focus:border-gold focus:ring-gold"
              />
              <p className="text-xs text-gray-500 mt-2">
                * Todas as informações compartilhadas são protegidas por sigilo profissional.
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-navy hover:bg-navy/90 text-white px-8 py-3 text-base"
              >
                Solicitar Contato
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
