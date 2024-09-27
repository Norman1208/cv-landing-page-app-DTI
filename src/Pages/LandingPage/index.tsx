import { FC } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Portofolio from '../../components/Portofolio'
import About from '../../components/About'

const LandingPage: FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Portofolio />
        </>
    );
}

export default LandingPage;
