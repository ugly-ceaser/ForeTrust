import Navbar from '../components/Shared/navBar'
import Footer from '../components/Shared/footer'
import abouts from '../components/aboutpage/css/abouts.module.css'
import Facilities from '@/components/aboutpage/properties/Facilities';
import Button from '@/components/aboutpage/properties/Button';
import Counter from '@/components/aboutpage/properties/Counter';

const about = ()=>{
    return(
        <>
        <Navbar />
        <div className="min-h-[550px] mt-0">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div className={abouts.about}></div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className={`${abouts.text}text-3xl sm:text-4xl font-bold`}>
                 We Always Offer ...
                </h1>
                <p className={`${abouts.text} text-sm text-gray-500 tracking-wide leading-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  option
                </p>
                <p className={`${abouts.text} text-sm text-gray-500 tracking-wide leading-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  option
                </p>
                <div>
             <Button/>
              </div>
              </div>
            </div>
            <Counter/>
          </div>
        </div>
        <Facilities/>
      </div>
      <Footer />
    </>
  );
};


export default about
