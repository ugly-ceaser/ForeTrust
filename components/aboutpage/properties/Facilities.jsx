import React from 'react'
import facilities from '../css/facilities.module.css'

const Facilities = () => {
  return (
    <div className="mt-6">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-center text-2xl font-bold mb-6">Our Trainings and Facilities</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <img src="/images/about1.jpg" alt="img" className={`${facilities.facilities} "w-full h-auto object-cover rounded-lg`} />
          <img src="/images/about2.jpeg" alt="img2" className="w-full h-auto object-cover rounded-lg" />
          <img src="/images/about3.jpeg" alt="img3" className="w-full h-auto object-cover rounded-lg" />
          <img src="/images/about4.jpeg" alt="img4" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Facilities
