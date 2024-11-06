import Navbar from '../components/Shared/navBar'
import Footer from '../components/Shared/footer'
import Hero from '../components/homepage/hero'
import CoreValues from '../components/homepage/coreValues'
import Story from '../components/homepage/story'

const homePage = ()=>{
    return(
        <>
        <Navbar />
        <main className="max-w-screen-lg mx-auto ">
        <Hero />
        </main>
        <CoreValues />
        <Story />
        <Footer />
        </>
    )
}
export default homePage