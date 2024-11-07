import React from 'react';
import hero from './css/hero.module.css';

const Three = () => {
  return (
    <div className={`${hero.three} px-4 py-8`}>
      {/* Title and Paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-3xl mt-10 font-bold mb-4">Meet Our Team</h1>
        <p className="text-gray-600">This is the software and IT training team of our company.</p>
      </div>

      {/* Images with Paragraphs */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img src="./images/about3.jpeg" alt="Image 1" className={`${hero.threepic} object-cover mb-2`} />
          <h1 className='text-left font-bold'>NAME</h1>
          <p className="text-gray-500 text-center">Short paragraph for Image 1</p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img src="./images/about1.jpg" alt="Image 2" className={`${hero.threepic} object-cover mb-2`} />
          <h1 className=' text-left font-bold'>NAME</h1>
          <p className="text-gray-500 text-center">Short paragraph for Image 2</p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <img src="./images/about1.jpg" alt="Image 3" className={`${hero.threepic} object-cover mb-2`} />
          <h1 className=' text-left font-bold'>NAME</h1>
          <p className="text-gray-500 text-center">Short paragraph for Image 3</p>
        </div>
      </div>
    </div>
  );
};

export default Three;
