import React, {useRef, useState} from 'react';
import '../sass/Contact.scss';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiGithub, FiFacebook, FiLinkedin,  } from 'react-icons/fi';
import { TbBrandGmail } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  
    //Email JS
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_r4hje4s', 'template_yzm87rs', form.current, 'nzZuhb8xN82QYdBT8')
        .then((result) => {
            e.target.reset();
            console.log(result.text);
            console.log("message sent");

            toast.success('Message sent! 🥰 Thanks for reaching out', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });


        }, (error) => {
            console.log(error.text);
            console.log("message not sent")
            
            toast.error('🙉 Oops, something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        });
    };

  return (
    <>
    <section className='contact-container' id='contact'>
        <div className='wrapper'>
            <h1>Send me a message!</h1>
            <p>Got a proposal or inquire about potential collaborations? I’m always open to new opportunities and would love to hear from you.</p>
            <div className='socials-content'>
                <ul className='item-socials'>
                    <li className='item-social'>
                        <Link className='link-social' to='https://github.com/FRANCEBEAM?tab=repositories'>
                            <FiGithub size={26}/>
                        </Link>
                    </li>
                    <li className='item-social'>
                        <Link className='link-social' to='https://www.facebook.com/francisbeam.santander'>
                            <FiFacebook size={26}/>
                        </Link>
                    </li>
                    <li className='item-social'>
                        <Link className='link-social' to='mailto:santanderfrancisbeam@gmail.com'>
                            <TbBrandGmail size={26}/>
                        </Link>
                    </li>
                    <li className='item-social'>
                        <Link className='link-social' to='https://www.linkedin.com/in/francebeam'>
                            <FiLinkedin size={26}/>
                        </Link>
                    </li>
                </ul>
            </div>
            <form className='form-content' ref={form} onSubmit={sendEmail}>
                <div className='grid-content'>
                    <div className='form-label'>
                        <label>Name</label>
                        <input className='input-name' type='text' name="user_name" placeholder='Enter your name' required/>
                    </div>
                    <div className='form-label'>
                        <label>Email</label>
                        <input className='input-email' type='email' name="user_email" placeholder='Enter your email' required/>
                    </div>
                </div>
                <div className='form-label'>
                    <label>Message</label>
                    <textarea className='input-message' name='message' placeholder='Let’s work together, I’m available for projects and work to discuss your project requirements and timeline.' required/>
                </div>
                <button className='btn-send' type='submit' value='send'>
                    SEND <FaTelegramPlane size={22}/>
                </button>
            </form>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        </div>
    </section>
    </>
  )
}

export default Contact