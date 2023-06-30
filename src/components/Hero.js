import React from 'react';
import '../sass/Hero.scss';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FiGithub, FiFacebook } from 'react-icons/fi'

const Hero = () => {
  return (
    <>
    <div className='hero-container'>
        <div className='wrapper'>

        <svg className='palette' width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_922_6468)">
            <path d="M26.7323 39.0089C28.197 39.8546 28.6989 41.7276 27.8532 43.1924C27.0075 44.6572 25.1345 45.159 23.6698 44.3134C22.205 43.4677 21.7031 41.5947 22.5488 40.1299C23.3945 38.6651 25.2675 38.1633 26.7323 39.0089Z" fill="#B59BFF"/>
            <path d="M24.864 32.0365C25.7096 30.5718 25.2078 28.6988 23.743 27.8531C22.2782 27.0074 20.4052 27.5093 19.5596 28.974C18.7139 30.4388 19.2157 32.3118 20.6805 33.1575C22.1453 34.0032 24.0183 33.5013 24.864 32.0365Z" fill="#B59BFF"/>
            <path d="M28.847 19.0124C30.3118 19.8581 30.8136 21.7311 29.968 23.1958C29.1223 24.6605 27.2493 25.1625 25.7845 24.3168C24.3198 23.4711 23.8179 21.598 24.6636 20.1333C25.5092 18.6686 27.3823 18.1667 28.847 19.0124Z" fill="#B59BFF"/>
            <path d="M37.7146 46.5285C38.5603 45.0637 38.0583 43.1907 36.5936 42.345C35.1289 41.4993 33.2558 42.0012 32.4102 43.466C31.5645 44.9307 32.0664 46.8038 33.5311 47.6494C34.9958 48.4951 36.8689 47.9932 37.7146 46.5285Z" fill="#B59BFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2385 52.9172C11.4969 46.7155 7.81653 32.9802 14.0182 22.2385C20.1138 11.6806 32.9374 7.22883 42.9287 12.9973L42.9546 13.0123C43.8888 13.5517 45.4852 14.4731 47.0227 16.1095C51.051 20.3974 49.2644 26.5089 45.8402 30.0144C45.1278 30.7436 44.3944 31.4676 43.6797 32.1571C42.4478 33.3451 42.9554 35.3674 44.4185 35.8623L47.5509 36.922L48.8828 37.4208C52.3371 38.715 54.1194 43.029 51.6476 46.2825C47.4566 51.7989 42.5355 54.9231 37.3372 55.8916C32.1546 56.857 26.9441 55.6339 22.2385 52.9172ZM17.5545 24.2802C12.4804 33.0688 15.4916 44.3068 24.2802 49.3809C28.3211 51.7139 32.5487 52.63 36.5893 51.8773C40.6139 51.1275 44.701 48.676 48.3963 43.8122C48.9773 43.0476 48.7215 41.7209 47.4502 41.2446L46.1801 40.7687L43.1099 39.7303C38.591 38.2015 37.5316 32.4137 40.845 29.2179C41.537 28.5505 42.2407 27.8556 42.9191 27.1611C45.5489 24.469 45.9505 20.9318 44.0465 18.9054C42.9368 17.7241 41.7816 17.0501 40.8871 16.5336C33.1971 12.0938 22.7347 15.3078 17.5545 24.2802Z" fill="#B59BFF"/>
            </g>
            <defs>
            <clipPath id="clip0_922_6468">
            <rect width="49" height="49" fill="white" transform="translate(0 42.4353) rotate(-60)"/>
            </clipPath>
            </defs>
        </svg>


        <svg className='curlybraces' width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8663 14.9276L27.8771 14.6626C25.6919 14.077 23.4457 15.3738 22.8602 17.5591L21.8 21.5158C21.2699 23.4941 19.0227 27.1328 14.2747 25.8605C16.253 26.3906 19.8917 28.6378 18.6194 33.3859L17.5591 37.343C16.9736 39.5282 18.2705 41.7739 20.4557 42.3595L21.4449 42.6245M38.758 17.5781L39.7472 17.8432C41.9325 18.4287 43.2292 20.6748 42.6437 22.86L41.5835 26.8167C41.0534 28.7951 41.1802 33.0698 45.9283 34.3421C43.9499 33.812 39.6752 33.9388 38.4029 38.6868L37.3426 42.6439C36.7571 44.8292 34.5111 46.1256 32.3258 45.54L31.3367 45.275" stroke="#33AADD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


            <svg className='htmlcoding' width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_922_6460)">
                <path d="M41.2825 74.6472L12.1476 67.5951L10.0901 59.9167L31.8167 39.3205L34.2333 48.3393L18.8001 61.5946L38.8793 65.6783L41.2825 74.6472Z" fill="#FFD9D9"/>
                <path d="M46.9246 78.3354L51.7158 28.7847L57.0416 27.3577L52.2113 76.9189L46.9246 78.3354Z" fill="#FFD9D9"/>
                <path d="M73.5117 66.0114L71.1084 57.0424L86.4714 43.5386L66.4329 39.5929L64.0449 30.681L93.1636 37.6724L95.2086 45.3046L73.5117 66.0114Z" fill="#FFD9D9"/>
                </g>
                <defs>
                <clipPath id="clip0_922_6460">
                <rect width="86" height="86" fill="white" transform="translate(0 22.2585) rotate(-15)"/>
                </clipPath>
                </defs>
            </svg>

            <svg className='spiral' width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_922_6113)">
                <path d="M31.8396 51.3408C41.2795 41.9009 54.0811 36.5951 67.4312 36.5894C80.7812 36.5837 93.5873 41.8786 103.035 51.3104C106.775 55.0503 109.742 59.4901 111.766 64.3764C113.79 69.2627 114.831 74.4998 114.831 79.7887C114.831 85.0776 113.79 90.3147 111.766 95.201C109.742 100.087 106.775 104.527 103.035 108.267C96.9962 114.306 88.8054 117.699 80.2648 117.699C71.7242 117.699 63.5335 114.306 57.4943 108.267C52.6631 103.436 49.9489 96.8831 49.9489 90.0506C49.9489 83.2181 52.6631 76.6655 57.4944 71.8342C61.3594 67.9692 66.6015 65.7979 72.0675 65.7979C77.5334 65.7979 82.7755 67.9692 86.6406 71.8342C89.7326 74.9263 91.4697 79.1199 91.4697 83.4927C91.4697 87.8655 89.7326 92.0592 86.6406 95.1512C84.1685 97.6232 80.8158 99.012 77.3198 99.012C73.8239 99.012 70.4711 97.6232 67.9991 95.1512C66.0235 93.1756 64.9111 90.4978 64.9054 87.7039C64.8998 84.91 66.0012 82.2277 67.9688 80.2441C69.5792 78.6337 71.7634 77.729 74.0409 77.729C76.3184 77.729 78.5026 78.6337 80.113 80.2441C80.7272 80.882 81.2096 81.6346 81.5329 82.4589C81.8561 83.2832 82.0138 84.1632 81.9968 85.0485C81.9799 85.9338 81.7888 86.807 81.4343 87.6184C81.0798 88.4298 80.5689 89.1634 79.9309 89.7774" stroke="#202020" stroke-width="5" stroke-miterlimit="10"/>
                </g>
                <defs>
                <clipPath id="clip0_922_6113">
                <rect width="103.047" height="103.047" fill="white" transform="translate(73.8589 0.51709) rotate(45)"/>
                </clipPath>
                </defs>
            </svg>

            <svg className='zigzagline' width="96" height="87" viewBox="0 0 96 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C16.0075 4.25732 84.0852 10.0453 86.0451 15.5439C88.005 21.0425 15.0852 30.0139 13.7594 34.9916C12.4336 39.9693 79.0125 41.1269 78.0902 45.41C77.1679 49.6932 9.49373 57.3333 8.22556 60.6904C6.95739 64.0474 70.5389 62.7741 70.4812 65.5523C70.4236 68.3305 3.9599 74.1186 7.8797 77.3598C11.7995 80.6011 79.6466 83.7266 94 85" stroke="#202020" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <img className='hero-francis' src="./assets/francis.png" alt="francis beam santander" draggable="false" />
            <svg className='blobs' width="416" height="302" viewBox="0 0 416 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M409 74.1448C409 129.856 300.25 148 208.924 148C122.932 148 25 126.601 25 74.1448C25 21.6261 122.83 -1.25089e-05 208.924 -8.74562e-06C300.346 -4.74941e-06 409 18.3754 409 74.1448Z" fill="#F7D046"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M384 169.131C384 219.572 275.25 236 183.924 236C97.932 236 -1.63818e-06 216.625 4.37859e-07 169.131C2.51637e-06 121.58 97.8299 102 183.924 102C275.346 102 384 118.637 384 169.131Z" fill="#F7D046"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M416 243.614C416 287.656 302.719 302 207.587 302C118.012 302 16 285.083 16 243.614C16 202.096 117.906 185 207.587 185C302.819 185 416 199.526 416 243.614Z" fill="#F7D046"/>
            </svg>

            <div className='animate__animated animate__fadeIn left-orientation'>
                <ul className='left-socials'>
                    <li className='social'>
                    <Link to='/'>
                        <FiGithub className='github' size={24}/>
                    </Link>
                    </li>
                    <li className='social'>
                    <Link className='facebook' to='/'>
                        <FiFacebook size={24}/>
                    </Link>
                    </li>
                    <li className='gmail'>
                    <Link to='mailto:santanderfrancisbeam@gmail.com'>
                        santanderfrancisbeam@gmail.com
                    </Link>
                    </li>
                    <li className='line'>
                    
                    </li>
                </ul>
            </div>
            <div className="hero-content">
                <h3>FRONTEND WEB DEVELOPER</h3>
                <h1>FRANCIS BEAM SANTANDER</h1>
                <p>I build amazing <span>website</span>, and <span>web design</span> for quality products with great user experiences and passionate of creating interactive. Let’s build and work together.</p>

                <div className='btn-content'>
                    <Link to='/' className="btn-projects" href="">
                        MY PROJECTS
                        <HiOutlineArrowNarrowRight size={24} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero