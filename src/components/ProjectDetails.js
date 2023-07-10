import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { uiuxproject } from './PageTemplate';
import '../sass/ProjectDetails.scss';

const ProjectDetails = () => {
    const { id } = useParams();
    const uiux = uiuxproject.find((uiux) => uiux.id === parseInt(id));

  return (
    <>
    <section className='details-section'>
        <div className="wrapper">
            <div className="btn-container">
                <Link className='btn-back' to='/projects'>
                <FiArrowLeft className='arrowleft' size={16} /> All Projects
                </Link>
            </div>

            {uiux && (
            <div className='project-details' id={uiux.id}>
                    
                <div className="top-content">
                    <h1>{uiux.title}</h1>
                    <p>{uiux.type}</p>
                    <p>{uiux.year}</p>
                    <img src={uiux.cover} alt={uiux.alt} draggable='false' />
                </div>

                <div className="overview-content">
                    <p className='overview-head'>OVERVIEW</p>
                    <p className='overview-desc'>{uiux.overview}</p>
                </div>

                <div className='line-br'></div>

                <div className="process-content">
                    <div className='color-palette'>
                        <h1>Color Palette</h1>
                        <div className="palette-img">
                            <img src={uiux.palette} alt="" draggable='false' />
                        </div>
                    </div>
                    <div className='typography'>
                        <h1>Typography</h1>
                        <div className='typography-img'>
                            <img src={uiux.typography} alt="" draggable='false' />
                        </div>
                    </div>
                </div>

                <div className='project-wireframe'>
                    <h1>Wireframe</h1>
                    <div className="wireframe-img">
                        <img src={uiux.wireFrame} alt="" draggable='false' />
                    </div>
                </div>

                <div className='project-outcome'>
                    <h1>Project Outcome</h1>
                    <ul className="outcome-items">
                        {uiux.outcome.map((image, index) => (
                        <li className='outcome-item' key={index}>
                            <img src={image} alt="" draggable='false' />
                        </li>
                        ))}
                    </ul>
                </div>

                <div className='final-outcome'>
                    {
                        <img src={uiux.finalOutcome} alt='' draggable='false' />
                    }
                </div>
            </div>
            )}
        </div>
    </section>
    </>
  )
}

export default ProjectDetails