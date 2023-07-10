import React, { useEffect } from 'react'
import '../sass/Work.scss'
import { MdViewQuilt, MdDesktopWindows } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai';
import { RiCodeBoxFill } from 'react-icons/ri';
import Aos from 'aos';
import "aos/dist/aos.css";
import { workContent } from './PageTemplate';

const Work = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);
  return (
    <>
  <section className='work-container' id="work" data-aos="fade-zoom-in">
        <div className='wrapper' data-aos="fade-up">
            <h1>What I do?</h1>
            <p className='specialize'>As a front-end web developer, I specialize in crafting visually appealing and user-friendly websites that deliver outstanding user experiences.</p>
            <div className='card-container'>
                {
                    workContent.map((work, index) => (
                        <div className='card-work'>
                            <div className='work-icon'>
                                {
                                    work.icon
                                }
                                {/* <work.icon size={70} /> */}
                                <p className='work-title'>{work.work}</p>
                            </div>
                            <div className='work-description'>
                                <p>{work.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Work