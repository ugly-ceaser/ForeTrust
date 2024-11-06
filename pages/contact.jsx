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
      <div className="flex flex-col mt-16 pb-5 items-center">
        {/* Centered Title and Paragraph */}
        <div className="text-center mb-8 px-4 w-full max-w-5xl">
          <h1 className="text-3xl font-bold text-teal-700">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We&apos;d love to hear from you. Please fill out the form below, and we&apos;ll get back to you soon!
          </p>
        </div>
        
        {/* Side-by-side container for Form and Map */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl px-2">
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
