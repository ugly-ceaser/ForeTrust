import React, { useState } from 'react';
import Button from '../Shared/Buttons';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ServicesContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Service One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
      imgSrc: '/images/about1.jpeg',
      modalImgSrc: '/images/service1.jpg',
      modalContent: 'Detailed information about Service One...',
    },
    {
      id: 2,
      title: 'Service Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
      imgSrc: '/images/about1.jpeg',
      modalImgSrc: '/images/about2.jpeg',
      modalContent:
        'Detailed information about Service Two... jaKLnsjkansmmzMxn zjnzjansdkjns uiawuiafiuhweihwehe Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus delectus ipsa minus cumque, cum, quod explicabo fugiat esse quibusdam ullam aut quae sit, culpa ratione nostrum nihil? Maxime, minu Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum at incidunt cupiditate fuga, maxime distinctio quasi, temporibus quae, dicta magni neque labore praesentium perspiciatis alias vitae blanditiis sapiente excepturi?',
    },
    {
      id: 3,
      title: 'Service Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
      imgSrc: '/images/about2.jpeg',
      modalImgSrc: '/images/service3.jpg',
      modalContent: 'Detailed information about Service Three...',
    },
    {
      id: 4,
      title: 'Service Four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
      imgSrc: '/images/about2.jpeg',
      modalImgSrc: '/images/service4.jpg',
      modalContent: 'Detailed information about Service Four...',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <div className="p-8">
      {/** Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-teal-700 text-3xl lg:text-[3rem] font-bold">
          Our Services
        </h1>
      </div>

      {/** Services Section for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/** Image Section */}
            <div className="w-1/3 flex items-center">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/** Text Section */}
            <div className="w-2/3 p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button
                title={service.title}
                imageSrc={service.modalImgSrc}
                content={service.modalContent}
                buttonText="Learn More"
              />
            </div>
          </div>
        ))}
      </div>

      {/** Services Section for Smaller Screens (Slider with Image on Top) */}
      <div className="sm:hidden">
        <div className="relative w-full">
          <div className="flex justify-center items-center">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center gap-4 relative">
              {/* Image on top */}
              <img
                src={services[currentIndex].imgSrc}
                alt={`service-${currentIndex + 1}`}
                className="object-cover w-full h-52 md:h-64 rounded-md"
              />
              {/* Text Section */}
              <div className="text-center">
                <h3 className="font-semibold text-teal-700 text-lg mb-2">
                  {services[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {services[currentIndex].description}
                </p>
                <Button
                  title={services[currentIndex].title}
                  imageSrc={services[currentIndex].modalImgSrc}
                  content={services[currentIndex].modalContent}
                  buttonText="Learn More"
                />
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
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
