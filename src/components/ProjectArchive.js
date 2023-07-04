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
            <div className="card-project">
                <div className='img-content'>
                    <img src="./assets/project3.jpg" alt="" />
                </div>
                <div className='content'>
                    <Link className='head-content'>
                        <h1>Modern Muse React</h1>
                        <GoArrowUpRight size={16} />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde excepturi reiciendis velit placeat, aliquid, veritatis mollitia odio nostrum omnis labore eius facere iusto animi possimus necessitatibus consequuntur? Nam, dolor.</p>
                    <ul className='tech-items'>
                        <li className='tech-item'>PHP</li>
                        <li className='tech-item'>Sass</li>
                        <li className='tech-item'>JQuery</li>
                        <li className='tech-item'>JavaScript</li>
                        <li className='tech-item'>MaterialDesign</li>
                    </ul>
                </div>
            </div>

            <div className="card-project">
                <div className='img-content'>
                    <img src="./assets/project3.jpg" alt="" />
                </div>
                <div className='content'>
                    <Link className='head-content'>
                        <h1>Modern Muse React</h1>
                        <GoArrowUpRight size={16} />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde excepturi reiciendis velit placeat, aliquid, veritatis mollitia odio nostrum omnis labore eius facere iusto animi possimus necessitatibus consequuntur? Nam, dolor.</p>
                    <ul className='tech-items'>
                        <li className='tech-item'>PHP</li>
                        <li className='tech-item'>Sass</li>
                        <li className='tech-item'>JQuery</li>
                        <li className='tech-item'>JavaScript</li>
                        <li className='tech-item'>MaterialDesign</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProjectArchive