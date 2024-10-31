import React from 'react';

const ContactMap = () => {
  return (
    <div className="flex justify-center items-center -top-7 mb-3 rounded-lg  mx-auto z-10 relative w-full max-w-4xl p-5">
        <iframe
          title="Location Map"
          width="100%"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=10/A%20nwodo%20street,enugu+(Livia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default ContactMap;
