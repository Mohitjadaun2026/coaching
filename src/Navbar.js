import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    {/* 1st logo */}
    <div className ="logo">
      <h2>
       <span>M</span>EI 
       
      </h2>  
    </div>

    {/* 2nd menu part */}
    <div className="menu-link">
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      </div>

      {/* social media link  */}
      <div className="social-media">
        <ul className='social-media-desktop'>
            <li>
            <a href="https://www.facebook.com/" target="facebook">
            <FaFacebookSquare className="facebook"/>
            </a>
            </li>

            <li>
            <a href="https://www.instagram.com/" target="instagram">
            <FaInstagramSquare className='insta'/>            </a>
            </li>

            <li>
            <a href="https://www.youtube.com/" target="youtube">
            <FaYoutubeSquare className='youtube'/>
            </a>
            </li>
        </ul>
    

        </div>
    
    </nav>



</>
);
};
export default Navbar;