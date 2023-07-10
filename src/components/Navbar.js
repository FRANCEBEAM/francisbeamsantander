import React, { useEffect, useState } from 'react';
import '../sass/Navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import useScrollListener from "../hooks/UseScroll";
import 'animate.css';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    //Hide navbar
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();
  
    // update classList of nav on scroll
    useEffect(() => {
      const _classList = [];
  
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
        _classList.push("navbar-hidden");
  
      setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);


  return (
    <>
    <nav className={`navbar-container ${navClassList.join(" ")}`} >
      <div className='animate__animated animate__fadeInDown wrapper'>

        <div className='logo'>
            <Link className='animate__animated animate__fadeInDown' to="/" onClick={closeMobileMenu}>
              <img src="./assets/fblogovar1.svg" width={50}  alt="" />
            </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <HiX className='navbar-icon' color='white' size={36} /> : <HiOutlineMenuAlt3 className='navbar-icon' size={36} />}
        </div>

        <ul className={click ? `nav-items active ${navClassList.join(" ")}` : "nav-items"} onClick={closeMobileMenu}>
          <li className='animate__animated animate__fadeInDown nav-item'>
            <Link className="nav-link" to="#home">
              Home
            </Link>
          </li>
          <li className='animate__animated animate__fadeInDown nav-item'>
            <Link className="nav-link" to="#about">
              About
            </Link>
          </li>
          <li className='animate__animated animate__fadeInDown nav-item'>
            <Link className="nav-link" to="#projects">
              Projects
            </Link>
          </li>
          <li className='animate__animated animate__fadeInDown nav-item'>
            <Link className="nav-link" to="#work">
              Work
            </Link>
          </li>
          <li className='animate__animated animate__fadeInDown nav-item'>
            <Link className="nav-link" to="#contact">
              Contact
            </Link>
          </li>
          <li id="cv-section" className='animate__animated animate__fadeInDown nav-item'>
            <a id="btn-resume" href='Francis Beam Santander Resume.pdf' download="Francis Beam Santander Resume.pdf">
                Resume <HiOutlineDocumentDownload size='22' />
            </a>
          </li>
        </ul>

        <div className='cv-container'>
          <li id="cv-section" className='animate__animated animate__fadeInDown nav-item'>
            <a id="btn-resume" href='Francis Beam Santander Resume.pdf' download="Francis Beam Santander Resume.pdf">
                Resume <HiOutlineDocumentDownload size='22' />
            </a>
          </li>
        </div>

      </div>
    </nav>    
    </>
  )
}

export default Navbar