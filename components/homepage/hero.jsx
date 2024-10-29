import hero from './css/hero.module.css'

import React from 'react';

const Hero = () => {
  return (
    <div className={hero.container}>
       <h1 className={`${hero.bigText} font-montserrat`}>
        ForeTrust Digital <br /> Consulting
      </h1>
      <p className={`${hero.paraText} font-lato`}>
      We build a community of problem solvers from innovators, people with creative and <br/> expensive ideas and who are always ready to learn...
      </p>
      <a href="#learn-more" className={hero.CTAButton}>
        Learn More
      </a>

      <img
        src="/images/heroImg1.webp" // Replace with your actual image path
        alt="Backgrounde"
        className={hero.img1}
      />
    </div>
  );
};

export default Hero;
