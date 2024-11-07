import Navbar from '../components/Shared/navBar'
import Footer from '../components/Shared/footer'
import Hero from '../components/homepage/hero'
import CoreValues from '../components/homepage/coreValues'
import Story from '../components/homepage/story'
import Three from '../components/homepage/three'
import Gallery from '../components/homepage/Gallery'

const homePage = ()=>{
    return(
        <>
        <Navbar />
        <main className="max-w-screen-lg mx-auto ">
        <Hero />
        </main>
        <CoreValues />
        <Story />
        <Three/>
        <Gallery/>
        <Footer />
        </>
    )
}
export default homePage