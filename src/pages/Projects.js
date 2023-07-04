import React from 'react'
import RowProjects from '../components/RowProjects'
import '../sass/ProjectPage.scss';
import ProjectArchive from '../components/ProjectArchive';

const Projects = () => {
  return (
    <>
        <section className='project-section'>
            <RowProjects />
            <ProjectArchive />
        </section>
    </>
  )
}

export default Projects