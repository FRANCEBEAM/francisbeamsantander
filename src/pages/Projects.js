import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import RowProjects from '../components/RowProjects'
import '../sass/ProjectPage.scss';
import ProjectArchive from '../components/ProjectArchive';
import UiuxDesign from '../components/UiuxDesign';
import Contact from '../components/Contact';
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <>
        <section className='project-section'>
          <div className="btn-container">
            <Link className='btn-back' to='/'>
              <FiArrowLeft size={16} /> Francis Beam Santander
            </Link>
          </div>
          <RowProjects />
          <ProjectArchive />
          <UiuxDesign />
          <Contact />
          <Footer />
        </section>
    </>
  )
}

export default Projects