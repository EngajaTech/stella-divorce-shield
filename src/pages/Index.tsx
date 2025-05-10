
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmotionalConnection from "@/components/EmotionalConnection";
import Exclusivity from "@/components/Exclusivity";
import Justice from "@/components/Justice";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import EthicalCall from "@/components/EthicalCall";
import Attorney from "@/components/Attorney";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <EmotionalConnection />
        <Exclusivity />
        <Justice />
        <Services />
        <Testimonials />
        <EthicalCall />
        <Attorney />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
