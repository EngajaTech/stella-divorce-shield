
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false,
    }
  });
  
  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 bg-white p-8 rounded-sm shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2 text-sm font-medium text-navy">Nome</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Seu nome completo" 
                          required 
                          className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2 text-sm font-medium text-navy">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email" 
                          placeholder="Seu email" 
                          required 
                          className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-2 text-sm font-medium text-navy">Telefone</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="tel" 
                        placeholder="Seu telefone" 
                        required 
                        className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-2 text-sm font-medium text-navy">Assunto</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Assunto da consulta" 
                        required 
                        className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-2 text-sm font-medium text-navy">Mensagem</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        placeholder="Descreva brevemente sua situação" 
                        rows={5} 
                        required 
                        className="w-full border-gray-300 focus:border-gold focus:ring-gold"
                      />
                    </FormControl>
                    <p className="text-xs text-gray-500 mt-2">
                      * Todas as informações compartilhadas são protegidas por sigilo profissional.
                    </p>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                        id="privacy"
                        required
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-600">
                        Concordo com a política de privacidade e termos de uso
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-navy hover:bg-navy/90 text-white px-8 py-3 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Contato"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
