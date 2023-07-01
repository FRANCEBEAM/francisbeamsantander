import React from 'react'
import { aboutContent, frontend, backend, tools } from '../components/PageTemplate';

import '../sass/About.scss';

const About = () => {
  return (
    <>
        <div className='about-container'>
            {
            aboutContent.map((about, index) =>(
            <div className='wrapper'>
                <div className="left-content">
                    <div role='img' className='francisbeam'>
                        <img src="../assets/profile.svg" alt="Photo of Francis Beam" draggable="false"/>
                    </div>
                </div>
                <div className="right-content">
                    <h1>ABOUT ME</h1>
                    <p>{about.parag1}</p>
                    <p>{about.parag2}</p>
                    <div className='skills-tech'>
                        <h4>Frontend Development</h4>
                        <ul className='skill-items'>
                            {
                                frontend.map((stack, index) =>(
                                <li key={index}>
                                    <img src={stack.tech} alt={stack.alt} width={50} draggable="false" />
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='skills-tech'>
                        <h4>Backend Development</h4>
                        <ul className='skill-items'>
                            {
                                backend.map((stack, index) =>(
                                <li key={index}>
                                    <img src={stack.tech} alt={stack.alt} width={50} draggable="false" />
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='skills-tech'>
                        <h4>Tools</h4>
                        <ul className='skill-items'>
                            {
                                tools.map((stack, index) =>(
                                <li key={index}>
                                    <img src={stack.tech} alt={stack.alt} width={50} draggable="false" />
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            ))
            }
        </div>
    </>
  )
}

export default About