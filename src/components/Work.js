import React from 'react'
import '../sass/Work.scss'
import { MdViewQuilt, MdDesktopWindows } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai';
import { RiCodeBoxFill } from 'react-icons/ri';

const Work = () => {
  return (
    <>
  <section className='work-container' id="work">
        <div className='wrapper' data-aos="fade-up">
            <h1>What I do?</h1>
            <p className='specialize'>As a front-end web developer, I specialize in crafting visually appealing and user-friendly websites that deliver outstanding user experiences.</p>
            <div className='card-container'>
                <div className='card-work'>
                    <div className='work-icon'>
                        <MdViewQuilt size={70} />
                        <p className='work-title'>UX/UI DESIGN</p>
                    </div>
                    <div className='work-description'>
                        <p>I craft and create own design that immersed in style layout, fonts and logo. Passionate of art or stylish for implementing in UI that visually appealing and provide enjoyable with ensuring a consistent and best practices.             
                        </p>
                    </div>
                </div>
                <div className='card-work'>
                    <div className='work-icon'>
                        <RiCodeBoxFill size={70} />
                        <p className='work-title'>FRONTEND DEVELOPMENT</p>
                    </div>
                    <div className='work-description'>
                        <p>I love build responsive website that can adapt in different screen sizes. Proficient in working with popular frameworks and libraries such as Bootstrap, Tailwind CSS, jQuery and React JS, to develop and enhance the functionality of web applications.             
                        </p>
                    </div>
                </div>
                <div className='card-work'>
                    <div className='work-icon'>
                        <AiFillCode size={70} />
                        <p className='work-title'>BACKEND DEVELOPMENT</p>
                    </div>
                    <div className='work-description'>
                        <p>I’m probably not the typical backend dev, but at least I have good ideas and background how they work. I can build website using PHP for web applications that meet the requirements of the functionality behind the website.             
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Work