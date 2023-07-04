import React from 'react';
import '../sass/OtherProjects.scss';
import { otherProject } from './PageTemplate';
import { Link  } from 'react-router-dom';
import { FaRegFolder } from 'react-icons/fa'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const OtherProjects = () => {

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
            return `${str.slice(0, maxLength)}...`
        }
        return str
    }

  return (
    <>
    <section className='other-container'>
        <div className="head-container">
            <h1 className='other-head'>OTHER PROJECTS</h1> 
        </div>
        <div className='wrapper'> 
            {
                otherProject.map((item, index)=>{
                    return(
                    <Link className='card-project' key={index} to={item.hostLink} data-aos="fade-up">
                        <div className='card-content' to={item.hostLink}>
                            <div className='project-icons'>
                                <FaRegFolder size={36} color='#3D155F'/>
                                <ul className='project-links'>
                                    <li className='project-link'>
                                        <Link className='link' to={item.gitHubLink}>
                                            <FiGithub size={22}/>
                                        </Link>
                                    </li> 
                                    <li className='project-link'>
                                        <Link className='link' to={item.hostLink}>
                                            <FiExternalLink size={22}/>
                                        </Link>
                                    </li> 
                                </ul>
                            </div>
                            <div className='project-content'>
                                <h1 className='project-title'>
                                    {truncate(item.title, 17)}
                                </h1>
                                <p className='project-description'>
                                    {truncate(item.description, 200)}
                                </p>
                                <ul className='tech-used'>
                                    <li className='tech'>
                                        {item.technologies}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                   )
                })
            }
        </div>
    </section>
    </>
  )
}

export default OtherProjects