import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation, ScrollRestoration } from 'react-router-dom';


import './index.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';


const AppLayout = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects')
  const isUiuxProjectPage = location.pathname.startsWith('projects/')

  return(
    <>
      {!isProjectPage && !isUiuxProjectPage && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects/' element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}


ReactDOM.render(
  <Router>
    <AppLayout />
  </Router>,
  document.getElementById('root')
);
