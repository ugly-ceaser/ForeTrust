import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-6 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Testimonials */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-l-4 border-teal-500">
              <img
                src="/images/about2.jpeg"
                alt="customer1"
                className="absolute -top-6 -right-5 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-grow pr-6 md:pr-10">
                <h3 className="font-semibold text-teal-700 text-lg">Fumilayo Adeyemi</h3>
                <p className="text-gray-600 text-sm mt-2 md:mt-3 leading-relaxed">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-r-4 border-teal-500">
              <img
                src="/images/about1.jpg"
                alt="customer2"
                className="absolute -top-6 -left-5 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-grow pl-6 md:pl-10">
                <h3 className="font-semibold text-teal-700 ml-2 text-lg"> Chidi Nwankwo</h3>
                <p className="text-gray-600 text-sm mt-2 md:mt-3 leading-relaxed">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 relative border-l-4 border-teal-500">
              <img
                src="/images/about1.jpg"
                alt="customer3"
                className="absolute -top-6 -right-5 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-500 shadow-md transform transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-grow pr-6 md:pr-10">
                <h3 className="font-semibold text-teal-700 text-lg">Adeola Akande</h3>
                <p className="text-gray-600 text-sm mt-2 md:mt-3 leading-relaxed">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor nulla ac nulla elementum mollis. Etiam vitae ligula vel augue facilisis volutpat.”
                </p>
              </div>
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
                className="object-cover rounded-lg h-full w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
