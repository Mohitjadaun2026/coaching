import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../header/Head.jsx";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li class="dropdown"><a href="#About">ABOUT US</a>
                                        <ul>
            <li><a href="">About MEI</a></li>
              <li><a href="">Founder &amp; Chairman</a></li>
              <li><a href="">Vision</a></li>
              <li><a href="">Mission</a></li>
              
              <li><a href="">Policy</a></li>
           
                                        </ul>
                                    <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div></li>

            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className="dropdown">
              <a href="https://www.aiiteindia.com/index.php#">ACADEMICS</a>
              <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
              <ul>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=14">AIITE TEACHERS TRAINING ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=20">AIITE COMPUTER EDUCATION ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=21">AIITE VOCATIONAL EDUCATION ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=22">AIITE HARDWARE  NETWORKING ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=23">AIITE AGRICULTURE EDUCATION ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=24">AIITE FASHION DESIGN AND TEXTILE  ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=25">AIITE NATUROPATHY AND YOGA SCIENCES  </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=26">AIITE HEALTH AND PARAMEDICAL SCIENCES</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=27">AIITE BIOMEDICAL TECHNOLOGY ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=28">AIITE MANAGEMENT EDUCATION ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=29">AIITE ENGINEERING AND TECHNOLOGY ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=30">AIITE MASS-COMMUNICATION AND JOURNALISM ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=31">AIITE HYGIENE AND PUBLIC HEALTH ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=32">AIITE SOCIAL SCIENCES ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=34">AIITE FOOTWEAR TECHNOLOGY ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=35">AIITE SPORTS AND PHYSICAL EDUCATION ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=36">AIITE HANDWRITING TRAINING ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=37">AIITE AVIATION TRAINING ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=38">AIITE FIRE AND SAFETY TRAINING ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=39">AIITE HOTEL AND HOSPITALITY MANAGEMENT ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=40">AIITE BEAUTY AND WELLNESS ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=41">AIITE PERFORMING ARTS ACADEMY </a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=42">AIITE MULTIMEDIA AND ANIMATION ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=43">AIITE ASTROLOGY AND VASTU ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=44">AIITE DERMATOLOGY AND COSMETOLOGY ACADEMY</a></li>
                <li><a href="https://www.aiiteindia.com/academic-course.php?Aid=45">AIITE SECURITY SERVICES TRAINING ACADEMY</a></li>
              </ul>
            </li>



            <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
									<li class="dropdown"><a href="https://www.aiiteindia.com/index.php#">BRANCHES</a>

                                        <ul>

                                         <li> <a href="https://www.aiiteindia.com/franchise.php">Indian Branch</a></li>
                <li> <a href="https://www.aiiteindia.com/Overseas-franchise.php">International Branch</a></li>
             

                                        </ul>

                                    <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div></li>

            <li class="dropdown"><a href="https://www.aiiteindia.com/index.php#">ADMISSION</a>
              <ul>
                <li> <a href="https://www.aiiteindia.com/admission.php">Offline Admission</a></li>
                <li> <a href="https://www.aiiteindia.com/student-register.php">Online Admission</a></li>
             
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;