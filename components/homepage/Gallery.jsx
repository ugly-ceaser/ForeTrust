import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/images/about1.jpg', alt: 'Image 1',},
    { src: '/images/about2.jpeg', alt: 'Image 2',  },
    { src: '/images/about1.jpeg', alt: 'Main Image', description: 'This is the main image description.' },
    { src: '/images/about3.jpeg', alt: 'Image 3',  },
    { src: '/images/about1.jpeg', alt: 'Image 4', },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center my-12 bg-gray-50 p-4 sm:p-6 md:p-8">
    
      <h1 className="text-teal-700 text-3xl sm:text-2xl font-bold mb-6 text-center">
        Gallery
      </h1>

      
      <div className="md:hidden relative w-full max-w-sm">
       
        <div className="relative bg-white border rounded-lg shadow-lg p-4 flex items-center justify-center">
          <div className="w-64">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {images[currentIndex].description && (
              <p className="text-gray-600 text-center">{images[currentIndex].description}</p>
            )}
          </div>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full focus:outline-none"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full focus:outline-none"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border rounded-lg shadow-lg p-2">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-2">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Main Image with Paragraph in a Card */}
        <div className="bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-600 text-center">
            {images[2].description}
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border rounded-lg shadow-lg p-2">
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-2">
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
