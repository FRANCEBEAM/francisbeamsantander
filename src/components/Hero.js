import React from 'react';
import '../sass/Hero.scss';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <>
    <div className='hero-container'>
        <div className='wrapper'>
            <div className="hero-content">
                <h3>FRONTEND WEB DEVELOPER</h3>
                <h1>FRANCIS BEAM SANTANDER</h1>
                <p>I build amazing <span>website</span>, and <span>web design</span> for quality products with great user experiences and passionate of creating interactive. Let’s build and work together.</p>
                <div className='btn-content'>
                    <Link to='/' className="btn-projects" href="">
                        MY PROJECTS
                        <HiOutlineArrowNarrowRight size={24} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero