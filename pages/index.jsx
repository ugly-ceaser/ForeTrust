import Navbar from '../components/Shared/navBar'
import bg from '../components/Shared/css/bg.module.css'
import Footer from '../components/Shared/footer'
import Hero from '../components/homepage/hero'
import CoreValues from '../components/homepage/coreValues'
import Story from '../components/homepage/story'
import Three from '@/components/homepage/Three'
import Gallery from '@/components/homepage/Gallery'

const homePage = ()=>{
    return(
        <>
        <div className={`${bg.bg1}`}>
        <Navbar />
        <main className={` w-[80%] mx-auto `}>
        <Hero />
        </main>
        </div>
        <CoreValues />
        <Story />
        <Three/>
        <Gallery/>
        <Footer />
        </>
    )
}
export default homePage