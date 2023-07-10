import React from 'react'
import { Link } from 'react-router-dom';
import '../sass/NotFound.scss';

const NotFound = () => {
  return (
    <>
        <div className='message-container'>
            <div className="wrapper">
                <div className="content">
                    <h1>404:</h1>
                    <p>Page Not Found</p>
                </div>
                <div className="btn-home">
                    <Link className='home' to='/'>
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFound