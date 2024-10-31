import React from 'react';
import Services from './Services';

const Testimonial = () => {
  return (
    <div>
      <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Testimonials */}
          <div className="flex flex-col gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-l-4 border-teal-500">
              <img
                src="/images/about2.jpeg"
                alt="customer1"
                className="absolute -top-6 -right-5 w-24 h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-grow pr-10">
                <h3 className="font-semibold text-teal-700 text-lg">Fumilayo Adeyemi</h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-r-4 border-teal-500">
              <img
                src="/images/about1.jpg"
                alt="customer2"
                className="absolute -top-6 -left-5 w-24 h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-grow pl-10">
                <h3 className="font-semibold text-teal-700 text-lg">Chidi Nwankwo</h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-l-4 border-teal-500">
              <img
                src="/images/about1.jpg"
                alt="customer3"
                className="absolute -top-6 -right-5 w-24 h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-grow pr-10">
                <h3 className="font-semibold text-teal-700 text-lg">Adeola Akande</h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Title, Description, and Image */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl font-bold text-teal-700 leading-tight">
                Kind Words from Our Clients
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Our clients are at the heart of everything we do, and we take great pride in delivering excellent experiences. Here’s what they have to say about working with us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to going above and beyond to ensure our clients are happy, supported, and equipped for success.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg h-72">
              <img
                src="/images/about1.jpg"
                alt="About"
                className="object-cover rounded-lg h-full w-full transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Testimonial;
