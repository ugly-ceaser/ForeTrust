import Navbar from '../components/Shared/navBar'
import Footer from '../components/Shared/footer'
import AcademyServices from '@/components/academypage/AcademyServices'
import AcademyContact from '@/components/academypage/AcademyContact'
import ContactMap from '@/components/contactpage/ContactMap'
import shape from '@/components/academypage/css/shape.module.css'


const academyPage = ()=>{
    return(
        <>
        <Navbar />
        <div className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center">
            <div className=" text-center p-3 pb-8 sm:pb-0">
                <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/** text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-6 sm:pt:0 text-center sm:text-left'> 
                        <h1 className='text-teal-700 text-3xl mt-20 lg:text-[3rem] mb-6 font-bold '>
                            Fortrust Academy
                            </h1>
                        <p className='text-sm text-gray-600'>{" "}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus delectus ipsa minus cumque, cum, quod explicabo fugiat 
                            esse quibusdam ullam aut quae sit, culpa ratione nostrum nihil? Maxime, minus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum at 
                            incidunt cupiditate fuga, maxime distinctio quasi, temporibus quae, dicta magni neque labore praesentium perspiciatis alias vitae blanditiis sapiente excepturi?
                            </p>
                            <p className='text-sm text-gray-600'>{" "}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus delectus ipsa minus cumque, cum, quod explicabo fugiat 
                            esse quibusdam ullam aut quae sit, culpa ratione nostrum nihil? Maxime, minus.
                            </p>
                    </div>
                    {/** image section */}
                    <div className= "min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 mt-7">
                        <img className={shape.shape} src="/images/about1.jpg" alt="" />
                    </div>
                </div>
                <AcademyServices/>
                <AcademyContact/>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default academyPage