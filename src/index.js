import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';


import './index.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';


const AppLayout = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects');
  const isUiuxProjectPage = location.pathname.startsWith('projects/');
  const is404Page = location.pathname === '/404';

  const showNavbar = !isProjectPage && !isUiuxProjectPage && !is404Page;

  return (
    <>
      {showNavbar && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="https://francebeam.github.io/francisbeamsantander/" element={<Home />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};



ReactDOM.render(
  <Router basename='/francisbeamsantander'>
    <AppLayout />
  </Router>,
  document.getElementById('root')
);
