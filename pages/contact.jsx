import React from 'react';
import Navbar from '../components/Shared/navBar';
import Footer from '../components/Shared/footer';
import Form from '@/components/contactpage/Form';
import ContactService from '@/components/contactpage/ContactService';
import ContactSection from '@/components/contactpage/ContactSection';
import ContactMap from '@/components/contactpage/ContactMap';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-16 sm:-mt-32 md:mt-16 pb-4 items-center">
        {/* Centered Title and Paragraph */}
        <div className="text-center mb-6 md:mb-8 px-4 w-full max-w-5xl">
          <h1 className="text-2xl md:text-3xl mt-6 md:mt-9 font-bold text-teal-700">Contact Us</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            We'd love to hear from you. Please fill out the form below, and we'll get back to you soon!
          </p>
        </div>
        
        {/* Side-by-side container for Form and Map */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-1 sm:gap-2 w-full max-w-5xl md:px-4">
          <div className="flex-1">
            <Form />
          </div>
          <div className="flex-1">
            <ContactMap />
          </div>
        </div>
        <ContactService />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
