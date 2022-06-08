import React from 'react';
import {IconContext} from "react-icons"
import {GoDeviceMobile} from "react-icons/go"
import {BsCodeSlash} from 'react-icons/bs'
import {AiFillTool} from 'react-icons/ai'
import {FaRocket} from 'react-icons/fa'
import './Services.css'
import {Element} from 'react-scroll'
function Services() {
  return <div>
    <div>
      <Element name="service">
      <div className='row u1'>
              <center> <h1 className='k1'>Services</h1> 
              <hr/></center>
        <div className='col-lg-3 col-md-6 x1'>
          <div className='inside'>
            <div className='mobile m1'>
            <IconContext.Provider value={{ className:"icons"}}>
            <span ><GoDeviceMobile size='3em'/></span>
            </IconContext.Provider>
            </div>
            <h3>Web Design</h3>
            <p>Responsive designs that look great on any screen.</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 x1'>
          <div  className='inside b1'>
          <div className='mobile '>
          <IconContext.Provider value={{ className:"icons"}}>
            <span ><BsCodeSlash size='3em'/></span>
            </IconContext.Provider>
            </div>
            <h3>Web Development</h3>
            <p>Modern and effective web development.</p>
          </div></div>
        <div className='col-lg-3 col-md-6 x1'>
          <div  className='inside'>
          <div className='mobile'>
          <IconContext.Provider value={{ className:"icons" }}>
            <span ><AiFillTool size='3em' margin='43px'/></span>
            </IconContext.Provider>
            </div>
            <h3>Search Engine Optimization</h3>
            <p>Strategic SEO for higher rankings.</p>
          </div></div>
        <div className='col-lg-3 col-md-6 x1'>
          <div  className='inside'>
          <div className='mobile'>
          <IconContext.Provider value={{ className:"icons"}}>
            <span ><FaRocket size='3em'/></span>
            </IconContext.Provider>
            </div>
            <h3>Inbound Marketingn</h3>
            <p>Targeted advertising to increase web traffic.</p>
          </div></div>

      </div>
      </Element>
    </div>


    <div className='scroll'>

    </div>
  </div>;
}

export default Services;
