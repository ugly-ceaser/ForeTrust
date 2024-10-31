import React from 'react';
import Navbar from '../components/Shared/navBar';
import Footer from '../components/Shared/footer';
import Form from '@/components/contactpage/Form';
import ContactService from '@/components/contactpage/ContactService';
import ContactSection from '@/components/contactpage/ContactSection';
import ContactMap from '@/components/contactpage/ContactMap';

const contactPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-16 pb-5 items-center justify-center">
        {/* Content wrapper with background */}
        <div className="w-full max-w-3xl bg-gray-50 rounded-lg shadow-lg px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-teal-700">Contact Us</h1>
            <p className="text-gray-600 mt-2">
              We'd love to hear from you. Please fill out the form below, and we'll get back to you soon!
            </p>
          </div>
          <Form />
        </div>
        <ContactService/>
      </div>
      <ContactSection/>
      <ContactMap/>
      <Footer />
    </>
  );
};

export default contactPage;
