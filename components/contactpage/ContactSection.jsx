import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-4 px-3 sm:px-8 py-6 bg-gray-50">
      {/* Title Section */}
      <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
        <h2 className="text-xl sm:text-2xl font-bold text-teal-700">Find Us Here</h2>
      </div>
      
      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-4xl mx-auto">
        {/* Card 1: Phone Number */}
        <div className="flex-1 bg-white shadow rounded p-4 border border-gray-200 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-teal-700 mb-1">Phone Number</h3>
          <p className="text-gray-600">+123 456 7590</p>
        </div>

        {/* Card 2: Email */}
        <div className="flex-1 bg-white shadow rounded p-4 border border-gray-200 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-teal-700 mb-1">Email</h3>
          <p className="text-gray-600">contact@example.com</p>
        </div>

        {/* Card 3: Location */}
        <div className="flex-1 bg-white shadow rounded p-4 border border-gray-200 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-teal-700 mb-1">Location</h3>
          <p className="text-gray-600">123 Main St, Anytown, USA</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
