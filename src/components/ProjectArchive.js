import React from 'react';
import '../sass/ProjectArchive.scss';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go'
import { archive } from '../components/PageTemplate';

const ProjectArchive = () => {
  return (
    <>
    <section className='archive-section'>
        <div className="wrapper">
        {
            archive.map((arch, index)=>{
                const technologies = Object.keys(arch.technologies).map((key) => arch.technologies[key]); 
                return(
                    <div className="card-project" key={index}>
                        <div className="top-content">
                            <div className='img-content'>
                                <img src={arch.img} alt="" />
                            </div>
                        </div>
                        <div className='content'>
                            <Link className='head-content' to={arch.host} target="_blank" rel="noopener noreferrer">
                                <h1>{arch.title}</h1>
                                <GoArrowUpRight className='arrowright' size={16} />
                            </Link>
                            <p>{arch.description}</p>
                            <ul className='tech-items'>
                                {technologies.map((tech, techIndex) => (
                                    <li className='tech-item' key={techIndex}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </section>
    </>
  )
}

export default ProjectArchive