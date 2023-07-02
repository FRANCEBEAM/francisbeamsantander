import React from 'react';
import '../sass/OtherProjects.scss';

const OtherProjects = () => {

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
            return `${str.slice(0, maxLength)}...`
        }
        return str
    }

  return (
    <>
    <div className='other-container'>
         <h1 className='other-head'>Other Projects</h1> 
        <div className='wrapper'> 
            {
                OtherProjectData.map((item, index)=>{
                    return(
                    <Link className='card-project' key={index} to={item.hostLink} data-aos="fade-up">
                        <div className='card-content' to={item.hostLink}>
                            <div className='project-icons'>
                                <FaRegFolder size={36} color='#332FD0'/>
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
        {/* <div className='showmore'>
            <button className='btn-showmore' type='button'> 
                Show More
            </button>
        </div> */}
    </div>
    </>
  )
}

export default OtherProjects