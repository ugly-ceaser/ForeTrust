import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Fumilayo Adeyemi',
      image: '/images/about2.jpeg',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”',
    },
    {
      name: 'Chidi Nwankwo',
      image: '/images/about1.jpg',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”',
    },
    {
      name: 'Adeola Akande',
      image: '/images/about1.jpg',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-6 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Testimonials */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Slider for smaller screens */}
            <div className="md:hidden relative w-full">
              <div className="flex justify-center items-center">
                {/* Testimonial Card */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-l-4 border-teal-500">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={`customer-${currentIndex + 1}`}
                    className="absolute -top-6 -right-5 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
                  />
                  <div className="flex-grow pr-6 md:pr-10">
                    <h3 className="font-semibold text-teal-700 text-lg">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600 text-sm mt-2 md:mt-3 leading-relaxed">
                      {testimonials[currentIndex].text}
                    </p>
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
            </div>

            {/* Testimonials Grid for Larger Screens */}
            <div className="hidden md:block">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 relative ${
                    index % 2 === 0 ? 'border-l-4 border-teal-500' : 'border-r-4 border-teal-500'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={`customer-${index + 1}`}
                    className="absolute -top-6 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
                  />
                  <div className="flex-grow pr-6 md:pr-10">
                    <h3 className="font-semibold text-teal-700 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm mt-2 md:mt-3 leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Title, Description, and Image */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4 mb-8 lg:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700 leading-tight">
                Kind Words from Our Clients
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                Our clients are at the heart of everything we do, and we take great pride in delivering excellent experiences. Here’s what they have to say about working with us.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We are committed to going above and beyond to ensure our clients are happy, supported, and equipped for success.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg h-52 sm:h-64 md:h-72 lg:h-80">
              <img
                src="/images/about1.jpg"
                alt="About"
                className="object-cover rounded-lg h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
