import { FC } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Portofolio from '../../components/Portofolio'
import About from '../../components/About'
import Gallery from '../../components/Gallery'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const LandingPage: FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Portofolio />
            <Gallery />
            <Testimonials />
            <Footer />
        </>
    );
}

export default LandingPage;
