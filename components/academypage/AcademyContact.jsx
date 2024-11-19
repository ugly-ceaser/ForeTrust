import React from 'react';
import Form from '../contactpage/Form';
import AcademyForm from './AcademyForm';

const AcademyContact = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center p-4 md:p-8 bg-gray-50 min-h-[90vh] space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section - Contact Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-left md:mb-5 font-bold text-teal-700">
          Contact Us
        </h2>
        
        <div className="bg-white shadow-lg rounded-lg p-5 md:p-8 border border-gray-200">
          <p className="text-gray-600">
            Reach out to us for any queries, support, or feedback. We&apos;re here to help!
          </p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Email:</span>
              <a href="mailto:info@example.com" className="text-teal-600 hover:underline">info@foretrustgroup.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Phone:</span>
              <a href="tel:+1234567890" className="text-teal-600 hover:underline">+234-906-000-9485</a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Address:</span>
              <span className="text-teal-600">93A/94A, Premier Layout, Okinano</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center rounded-lg mx-auto z-10 relative w-full max-w-5xl p-5">
          <iframe
            width="1000"
            height="250"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Foretrust%20Digital%20Consulting%20Limited,%2093A/94A,%20Premier%20Layout,%20Okinano+(ForeTrust)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <div className="mt-1 md:mt-5 text-center">
          <button
            className="w-full md:w-auto py-2 px-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      {/* Right Section - Contact Form */}
      <div className="w-full xl:w-full md:w-1/2">
        <AcademyForm />
      </div>
    </section>
  );
}

export default AcademyContact;
