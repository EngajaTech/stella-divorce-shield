
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="testimonial-card">
      <div className="text-gold text-4xl font-serif mb-4">"</div>
      <p className="italic mb-4 text-gray-700">{quote}</p>
      <p className="font-semibold text-navy">– {author}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Encontrei aqui não só uma advogada, mas uma aliada. Protegi minha empresa, meus filhos e minha privacidade.",
      author: "Empresária, São Paulo"
    },
    {
      quote: "Acolhimento, estratégia e resultado. Tudo o que eu precisava para recomeçar.",
      author: "Executivo, ABC"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">O Que Nossos Clientes Dizem</h2>
          <div className="golden-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
