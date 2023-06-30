import React from 'react'
import { aboutContent } from '../components/PageTemplate';

import '../sass/About.scss';

const About = () => {
  return (
    <>
        <div className='about-container'>
            {
            aboutContent.map((about, index) =>(
            <div className='wrapper'>
                <div className="left-content">
                    <span className='francisbeam'></span>
                    {/* <img src="./assets/francisbeamsantander.jpg" alt="" /> */}
                </div>
                <div className="right-content">
                    <h1>ABOUT ME</h1>
                    <p>{about.parag1}</p>
                    <p>{about.parag2}</p>
                </div>
            </div>
            ))
            }
        </div>
    </>
  )
}

export default About