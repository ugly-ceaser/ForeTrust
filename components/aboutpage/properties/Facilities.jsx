import React from 'react'

const Facilities = () => {
  return (
    <div className="mt-6">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-center text-2xl font-bold mb-6">Our Trainings and Facilities</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img src="../../../public/images/ecology.png" alt="img" className="w-full h-auto object-cover rounded-lg" />
          <img src="/images/img2.jpg" alt="img2" className="w-full h-auto object-cover rounded-lg" />
          <img src="/images/img3.jpg" alt="img3" className="w-full h-auto object-cover rounded-lg" />
          <img src="/images/img4.jpg" alt="img4" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Facilities
