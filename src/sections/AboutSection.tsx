import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f9f5f0] dark:bg-[#1e0f0b] text-[#2b1a17] dark:text-cream transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-serif text-gold dark:text-gold">About Me</h2>
          <p className="text-lg italic text-[#2b1a17] dark:text-cream">
            "Elegance is not about being noticed, it's about being remembered." — Giorgio Armani
          </p>
          <p className="text-base text-[#2b1a17] dark:text-cream/90">
            I’m Veronika, a creative engineer blending technical precision with design elegance.
            Currently diving deep into AI, data science, and embedded hardware with a passion for
            luxury aesthetics and thoughtful minimalism. My mission? To create meaningful solutions
            that merge functionality with beauty. From CAD and Raspberry Pi to public speaking and
            meditation — I build with soul.
          </p>
          <p className="text-sm italic text-[#2b1a17]/80 dark:text-cream/70">
            Based in Poland • Available for select projects worldwide
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/veronika-poster.jpg"
            alt="Veronika Hordieieva"
            className="rounded-xl shadow-lg w-64 h-auto max-h-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
