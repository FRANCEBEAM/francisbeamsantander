import React, { useEffect } from 'react'
import '../sass/Projects.scss'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from './PageTemplate';
import Aos from 'aos';
import "aos/dist/aos.css";

const RowProjects = () => {

    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'linear'
        });
    }, []);

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
            return `${str.slice(0, maxLength)}...`
        }
        return str
    }

  return (
    <>
   <section className='project-container' id="projects">
        <div className='wrapper'>
            <div className="head-projectcontainer">
                <h1 className='head-projects'>PROJECTS</h1>
            </div>
            <div className='project-container'>
                {
                    projects.map((project, index)=>{
                        const technologies = Object.keys(project.technologies).map((key) => project.technologies[key]);
                        const subcategories = Object.keys(project.sub).map((key) => project.sub[key])
                        return (
                        <div className='card-project' key={index} >
                            <div className='right'>
                                <figure>
                                    <img src={project.img} />
                                </figure>
                            </div>

                            <div className='left'>
                                 <div className='sub-container'>
                                    {
                                        subcategories.map((subs, subIndex) => (
                                        <li className='sub-content' key={subIndex}>
                                            {subs}
                                        </li>
                                        ))
                                    }   
                                 </div>
                                <h1 className='head-content'>
                                    {project.title}
                                </h1>
                                <p className='project-description'>
                                    {truncate(project.desc, 350)}
                                </p>
                                <ul className='tech-items'>
                                    {technologies.map((technology, techIndex) => (
                                        <li className="tech-item" key={techIndex}>
                                        {technology}
                                        </li>
                                    ))}
                                </ul>
                              
            
                                <div className='btn-section'>
                                    <Link className='link-visit' to={project.live} target="_blank" rel="noopener noreferrer">
                                        <button className='btn-visit' type='button'>
                                            VISIT PROJECT
                                            <FaExternalLinkAlt size={14} />
                                        </button>
                                    </Link>
                                    <Link className='github' to={project.git} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    </section>
    </>
  )
}

export default RowProjects