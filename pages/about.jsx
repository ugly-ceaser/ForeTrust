import Navbar from '../components/Shared/navBar';
import Footer from '../components/Shared/footer';
import abouts from '../components/aboutpage/css/abouts.module.css';
import bg from '../components/Shared/css/bg.module.css';
import Facilities from '@/components/aboutpage/properties/Facilities';
import Button from '@/components/aboutpage/properties/Button';
import Counter from '@/components/aboutpage/properties/Counter';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[550px] mt-1 mb-3">
        <div className="min-h-[550px] flex justify-start items-center backdrop-blur-xl">
          <div className="w-full">

            <div className={`${bg.bg1} grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between `}>
              {/* Image Section */}
              <div className={`${abouts.about} sm:w-full md:w-full lg:w-full`}>
                <img
                  src="/images/about.jpg"
                  alt="About Foretrust"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col justify-center gap-4 pt-6 sm:pt-0 text-center sm:text-left p-3">
              <h1 className="text-teal-700 text-3xl lg:text-[3rem] mb-4 sm:mb-5 font-bold mt-10 sm:mt-20">
              We Always Offer Excellence
              </h1>
              <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus delectus ipsa minus cumque, cum, quod explicabo fugiat esse quibusdam ullam aut quae sit, culpa ratione nostrum nihil? Maxime, minus.
              </p>
              <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus delectus ipsa minus cumque, cum, quod explicabo fugiat esse quibusdam ullam aut quae sit, culpa ratione nostrum nihil? Maxime, minus.
              </p>

              <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus delectus ipsa minus cumque, cum, quod explicabo fugiat esse quibusdam ullam aut quae sit, culpa ratione nostrum nihil? Maxime, minus.
              </p>
            </div>
            </div>


            <Counter />
          </div>
        </div>
        <Facilities />
      </div>

      <Footer />
    </>
  );
};

export default About;
