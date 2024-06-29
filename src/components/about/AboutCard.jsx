import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
<section class="about-section">
  <div class="auto-container">
    <div class="content-column col-lg-6 col-md-12 col-sm-12">
      <div class="inner-column">
        <div class="sec-title">
          <span class="sub-title">WELCOME TO</span>
          <h2>MAHANTH EDUCATIONAL INSTITUTE</h2>
          <span class="divider"></span>
        </div>
        <p class="text-justify" style={{ color: '#8B0A1A' }}>
        Mahanth Educational Institute" is established on this day, 21 October 2013. To accomplish the mission and vision of Father Mr. Rambali & Mother Mrs. Shobhavati Devi, by "ER. DILIP KUMAR" (Founder and Chairman). Mahanth Educational Institute is AN ISO 9001: 2015 certified Organization Regd. By Govt. of NCT, Delhi (INDIA)
With a strong foundation in academic excellence, Mahanth Educational Institute has been dedicated to providing quality education to students from diverse backgrounds. Our institution is committed to fostering a culture of innovation, creativity, and critical thinking, empowering students to become responsible citizens and leaders of tomorrow. We strive to create a supportive and inclusive learning environment, where students can grow, learn, and thrive. Our experienced faculty, state-of-the-art infrastructure, and industry-relevant curriculum ensure that our students are well-equipped to succeed in an increasingly complex and competitive world.





        </p>
       
      </div>
    </div>
  </div>
</section>


      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/bg2.png' alt='' />
          </div>
          <div className='right row'>
            <Heading title='INSIGHTS' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
