import React from 'react'
import Button from '../Shared/Buttons';

const AcademyServices = () => {
    const courses = [
        {
          id: 1,
          title: 'Course One',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
          imgSrc: '/images/about1.jpeg',
        },
        {
          id: 2,
          title: 'Course Two',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
          imgSrc: '/images/about1.jpeg',
        },
        {
          id: 3,
          title: 'Course Three',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
          imgSrc: '/images/about2.jpeg',
        },
        {
          id: 4,
          title: 'Course Four',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus.',
          imgSrc: '/images/about2.jpeg',
        },
      ];
    
  return (
    <div className="p-8">
      {/** Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-teal-700 text-3xl lg:text-[3rem] font-bold">
          What We Offer
        </h1>
      </div>

      {/** Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/** Image Section */}
            <div className="w-1/3 flex items-center">
              <img
                src={course.imgSrc}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/** Text Section */}
            <div className="w-2/3 p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-teal-700 mb-4">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Button/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademyServices