import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import RowProjects from '../components/RowProjects';
import OtherProjects from '../components/OtherProjects';
import UiUx from '../components/UiUx';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <RowProjects />
        <OtherProjects />
        <UiUx />
        <Work />
        <Contact />
        <Footer />
    </>
  )
}

export default Home