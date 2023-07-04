import React from 'react';
import '../sass/Uiux.scss';
import { uiux } from './PageTemplate';
import { Link } from 'react-router-dom';

const UiUx = () => {
  return (
    <>
     <div className='uiux-container'>
        <div className='wrapper'>
            <div className="head-container">
                <h1 className='header-uiux'>UI/UX PROJECTS</h1>
            </div>
            <div className="uiux-container">
                {
                uiux.map((ui, index) => (
                <div className='card-container' key={index}>
                    <a href={ui.link}>
                        <img src={ui.img} alt={ui.alt} />
                    </a>
                </div>
                ))
                }
            </div>
            <div className='showmore'>
                <Link className='btn-showmore' to='/projects'>
                    Show More
                </Link>
            </div>
        </div>
     </div>
    </>
  )
}

export default UiUx