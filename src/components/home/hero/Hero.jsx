import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO MEI' title='Empowering minds, enriching futures.' />  
            <p>Beyond the digital horizon, behind the code ranges, far from the lands of Pixelia and Cybernia, there thrive the innovative minds.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET ADMISSION <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
