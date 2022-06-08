import React from 'react';
import './About.css'
import { Element } from "react-scroll"
import { NavLink } from 'react-bootstrap';
import Link from 'react-scroll/modules/components/Link';
function About() {
  return <div>
    <div>
      <Element name="about">
        <div className='row'>

          <div className='col-lg-7 col-md-12 a1'>
            <div className='contect'>
              <h1>About</h1>
              <hr />
              <p>We have been providing strategic online solutions for over 10 years. We are passionate about what we do and love to help our clients succeed.</p>
              <p>
                Before getting started, we listen to understand your business, your audience, and your goals. From website development to online marketing and optimization, we have you covered.
              </p>
            </div>
          </div>
          <div className='col-lg-5 col-md-12 a2'>
            <div className='contect'>
              <img src='https://www.outburstweb.com/sites/all/themes/outburstweb/assets/img/rocket-ship.jpg' alt='3' />
            </div>

          </div>

        </div>

        <div className='row c2'>

          <div className='col-12 a3'>
            <div className='words'>
              <center> <h1>We are focused on your success</h1>
                <hr /></center>
              <p>Whether you are a non-profit organization, small company, startup or large corporation, contact us today to discuss how we can improve your online presence.</p>
              <NavLink  to="contact" as={Link} smooth={true} duration={1000} ><button className='bu'>
                CONTACT US
                </button></NavLink>
            </div>

          </div>


        </div>
      </Element>
    </div>
  </div>;
}

export default About;

<h1>ou</h1>