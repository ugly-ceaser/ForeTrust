import React from 'react';

const ContactSection = () => {
  return (
    <div className="sm:flex-row justify-center items-start gap-8 px-10 py-8 bg-gray-50">
      {/* Title Section */}
      <div className="sm:w-1/3">
        <h2 className="text-3xl ml-10 font-bold text-teal-700 mb-4">Find Us Here</h2>
      </div>
      {/* Cards Section */}
      <div className="flex flex-col items-center gap-7 sm:flex-row ml-44 sm:justify-center sm:gap-8 w-full max-w-4xl">
        {/* Card 1: Phone Number */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Phone Number</h3>
          <p className="text-gray-600">+123 456 7890</p>
        </div>

        {/* Card 2: Email */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Email</h3>
          <p className="text-gray-600">contact@example.com</p>
        </div>

        {/* Card 3: Location */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Location</h3>
          <p className="text-gray-600">123 Main St, Anytown, USA</p>
        </div>
      </div>
    </div>

  );
};

export default ContactSection;
