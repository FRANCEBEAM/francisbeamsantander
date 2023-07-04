import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { FaFacebook, FaGoogle , FaLinkedin} from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import '../sass/Footer.scss'

const Footer = () => {
  return (
    <>
    <footer className='footer-container'>
        <div className='wrapper'>
          <div className='first-row'>
            <ul className='col-1'>
              <li>
                <h1>francebeam</h1>
              </li>
              <li>
                <HiOutlineMail size={24}/>santanderfrancisbeam@gmail.com
              </li>
              <li>
               <IoCallOutline size={24}/> 09076410794
              </li>
            </ul>
            <ul className='col-2'>
            <li className='nav-item'>
              <Link className="nav-link" to="#home">
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="#about">
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="#projects">
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="#work">
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="#contact">
                Contact
              </Link>
            </li>
            </ul>
          </div>  
          <div className='second-row'>
            <p>Francis Beam Santander</p>
            <ul className='socials'>
              <li className='item-social'>
                <Link className='link-social' to='https://www.facebook.com/francisbeam.santander'>
                  <FaFacebook size={24}/>
                </Link>
              </li>
              <li className='item-social'>
                <Link className='link-social' to='mailto:santanderfrancisbeam@gmail.com'>
                  <FaGoogle size={24}/>
                </Link>
              </li>
              <li className='item-social'>
                <Link className='link-social' to='https://www.linkedin.com/in/francebeam'>
                  <FaLinkedin size={24}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer