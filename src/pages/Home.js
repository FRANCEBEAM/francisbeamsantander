import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import RowProjects from '../components/RowProjects';
import OtherProjects from '../components/OtherProjects';

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <RowProjects />
        <OtherProjects />
    </>
  )
}

export default Home