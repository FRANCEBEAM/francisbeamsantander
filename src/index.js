import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const AppLayout = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
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
