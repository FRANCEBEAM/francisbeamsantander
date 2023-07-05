import React from 'react'
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
                <FiArrowLeft size={16} /> All Projects
                </Link>
            </div>

            <div className='project-details'>
                {uiux && (
                    <div id={uiux.id}>
                        <div className="top-content">
                            <h1>{uiux.title}</h1>
                            <p>{uiux.type}</p>
                            <img src={uiux.img} alt={uiux.alt} />
                        </div>
                        <div className="overview-content">
                            <p>OVERVIEW</p>
                            <p>{uiux.overview}</p>
                        </div>

                        <div className='line-br'></div>

                        <div className="process-content">
                            <div className='color-palette'>
                                <h1>Color Palette</h1>
                                <div className="palette-img">
                                    <img src={uiux.palette} alt="" />
                                </div>
                            </div>
                            <div className='typography'>
                                <h1>Typography</h1>
                                <div className='typography-img'>
                                    <img src={uiux.typography} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='project-outcome'>
                            <div className="outcome">
                                <img src={uiux.outcome} alt="" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
    </>
  )
}

export default ProjectDetails