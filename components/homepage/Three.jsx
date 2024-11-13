import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import hero from './css/hero.module.css';

const Three = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: './images/about3.jpeg', alt: 'Image 1', title: 'NAME 1', description: 'Short paragraph for Image 1' },
    { src: './images/about1.jpg', alt: 'Image 2', title: 'NAME 2', description: 'Short paragraph for Image 2' },
    { src: './images/about1.jpg', alt: 'Image 3', title: 'NAME 3', description: 'Short paragraph for Image 3' },
  ];

  // Handle previous image in the slider
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle next image in the slider
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={`${hero.three} px-4 py-2`}>
      {/* Title and Paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-gray-600">This is the software and IT training team of our company.</p>
      </div>

      {/* Slider for Small Screens (Mobile) */}
      <div className="md:hidden relative w-full">
        <div className="flex justify-center items-center">
          {/* Image, Title, and Description */}
          <div className="flex flex-col items-center w-full max-w-sm mx-auto bg-white border rounded-lg shadow-lg p-4">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="object-cover rounded-md mb-4 w-full h-56"
            />
            <h2 className="font-bold text-xl mb-2">{images[currentIndex].title}</h2>
            <p className="text-gray-500 text-center">{images[currentIndex].description}</p>
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-5 mx-4 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full focus:outline-none"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full focus:outline-none"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img src="./images/about3.jpeg" alt="Image 1" className={`${hero.threepic} object-cover mb-2`} />
          <h1 className="text-left font-bold">NAME 1</h1>
          <p className="text-gray-500 text-center">Short paragraph for Image 1</p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img src="./images/about1.jpg" alt="Image 2" className={`${hero.threepic} object-cover mb-2`} />
          <h1 className="text-left font-bold">NAME 2</h1>
          <p className="text-gray-500 text-center">Short paragraph for Image 2</p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <img src="./images/about1.jpg" alt="Image 3" className={`${hero.threepic} object-cover mb-2`} />
          <h1 className="text-left font-bold">NAME 3</h1>
          <p className="text-gray-500 text-center">Short paragraph for Image 3</p>
        </div>
      </div>
    </div>
  );
};

export default Three;
