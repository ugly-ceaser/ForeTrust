import hero from './css/hero.module.css';
import React from 'react';
import Button from '@/components/Shared/Buttons';

const Hero = () => {
  return (
    <div className={`${hero.container} flex flex-col items-center text-center px-4 py-10 sm:py-20`}>
      {/* Title */}
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
        ForeTrust Digital <br className="hidden md:block" /> Consulting
      </h1>

      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg mx-auto mb-6">
        We build a community of problem solvers from innovators and people with creative ideas who are always ready to learn.
      </p>

      {/* Custom Button */}
      <Button
        title="Everything You Need To Know"
        imageSrc="/images/about1.jpg"
        content="Welcome to Foretrust, a beautiful place to learn"
        buttonText="Learn More"
        className="mt-4 sm:mt-6 text-white bg-teal-500 hover:bg-teal-700 px-6 py-3 rounded-md"
      />

      {/* Image (not centered) */}
      <div className="mt-8 w-full flex justify-center lg:justify-start">
        <img
          src="/images/heroImg1.webp"
          alt="ForeTrust Digital Consulting"
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl object-cover rounded-lg lg:rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
