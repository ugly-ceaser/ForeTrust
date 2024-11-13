import Navbar from '../components/Shared/navBar';
import Footer from '../components/Shared/footer';
import abouts from '../components/aboutpage/css/abouts.module.css';
import Facilities from '@/components/aboutpage/properties/Facilities';
import Button from '@/components/aboutpage/properties/Button';
import Counter from '@/components/aboutpage/properties/Counter';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[550px] mt-0">
        <div className="min-h-[550px] flex justify-start items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container px-2 sm:px-0 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image Section */}
              <div className={`${abouts.about} sm:w-full md:w-[80%] lg:w-[60%] mx-auto`}>
                {/* Image here */}
              </div>
              {/* Text Content Section */}
              <div className={`${abouts.textc} flex flex-col sm:mr-4 lg:mr-20 justify-center gap-6 sm:pt-0`}>
                <h1 className={`${abouts.text} text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-2`}>
                  We Always Offer ...
                </h1>
                <p className={`${abouts.text} text-sm sm:text-base text-gray-500 tracking-wide leading-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  option
                </p>
                <p className={`${abouts.text} text-sm sm:text-base text-gray-500 tracking-wide leading-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  option
                </p>
                <p className={`${abouts.text} text-sm sm:text-base text-gray-500 tracking-wide leading-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  option
                </p>
                <div>
                  <Button
                    title="Everything You Need To Know"
                    imageSrc="/images/about1.jpg"
                    content="Welcome to Foretrust, a beautiful place to learn"
                    buttonText="Learn More"
                  />
                </div>
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
