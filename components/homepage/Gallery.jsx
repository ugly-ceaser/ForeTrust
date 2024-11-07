import React from 'react';

const Gallery = () => {
  return (
    <div className="flex flex-col items-center my-12 bg-gray-50 p-3">
        <h1 className='text-center text-teal-700 text-4xl md:text-2xl sm:text-2xl font-bold mb-3'>Gallery</h1>
      {/* Image Grid */}
      <div className="flex flex-row items-start gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-y-2">
          <div className="bg-white border rounded shadow p-2">
            <img src="/images/about1.jpg" alt="Image 1" className="w-45 h-36 object-cover" />
          </div>
          <div className="bg-white border rounded shadow p-2">
            <img src="/images/about1.jpg" alt="Image 3" className="w-45 h-36 object-cover" />
          </div>
        </div>

        {/* Main Image with Paragraph in a Card */}
        <div className="bg-white border rounded shadow p-4">
          <div className="flex flex-col items-center">
            <img src="/images/about1.jpg" alt="Main Image" className="w-50 h-40 object-cover mb-2" />
            <p className="text-gray-600 text-center max-h-44 max-w-60">This is the main image description.
            This is the main image description.This is the main image description.This is the main image description.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-y-2">
          <div className="bg-white border rounded shadow p-2">
            <img src="/images/about1.jpg" alt="Image 2" className="w-45 h-36 object-cover" />
          </div>
          <div className="bg-white border rounded shadow p-2">
            <img src="/images/about1.jpg" alt="Image 4" className="w-45 h-36 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
