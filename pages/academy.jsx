import Navbar from '../components/Shared/navBar';
import Footer from '../components/Shared/footer';
import AcademyServices from '@/components/academypage/AcademyServices';
import AcademyContact from '@/components/academypage/AcademyContact';
import ContactMap from '@/components/contactpage/ContactMap';
import shape from '@/components/academypage/css/shape.module.css';
import bg from '../components/Shared/css/bg.module.css';

const academyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center ">
        <div className="text-center pb-8 w-full">
          <div className={`${bg.bg1} grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full`}>
           

            {/** Image section */}
            <div className="flex justify-center items-center relative mt-16 order-1 md:order-2 mb-5 md:mb-0">
              <img className={`${shape.shape} max-w-full h-auto mt-10`} src="/images/about1.jpg" alt="About Fortrust Academy" />
            </div>


             {/** Text content section */}
             <div className="flex flex-col justify-center gap-4 pt-6 sm:pt-0 text-center sm:text-left px-8">
              <h1 className="text-teal-700 text-3xl lg:text-[3rem] mb-4 sm:mb-5 font-bold mt-10 sm:mt-20">
              Fortrust Academy
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
          <AcademyServices />
          <AcademyContact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default academyPage;
