import React from 'react';
import { IconContext } from "react-icons"
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"
import Link from 'react-scroll/modules/components/Link';
import { CgChevronDoubleDownO } from 'react-icons/cg'

import './Navbars.css'
function Navbars() {
  return <div>
    <Navbar expand="lg" bg="dark" variant="dark" className='bnav' fixed="top" >
      <Container>
        <Navbar.Brand>  <img src='https://www.outburstweb.com/sites/all/themes/outburstweb/assets/img/logo.png' alt='brand' /> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='right'>
          <Nav >
            <Nav.Link to="about" as={Link} smooth={true} duration={1000} className='s1'>ABOUT</Nav.Link>
            <Nav.Link to="service" as={Link} smooth={true} duration={1000} className='s1'>SERVICES</Nav.Link>
            <Nav.Link to="contact" as={Link} smooth={true} duration={1000} className='s1'>CONTACT</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
    <div className='bimg'>
      <div className='top'>
        <h1>
          WE PROVIDE <span className="Text">STRATEGIC</span> <br />ONLINE <span className="Text">SOLUTIONS</span>
        </h1>
        <hr className="line"></hr>
        <div id="carouselExampleSlidesOnly" class="carousel slide cal" data-ride="carousel">
          <div className="carousel-inner cal">
            <div className="carousel-item active">
              <p>We create high quality websites</p>
            </div>
            <div className="carousel-item">
              <p> We achieve online goals</p>
            </div>

          </div>
        </div>
        <div>
          <IconContext.Provider value={{ className: "icons1" }}>
            <NavLink to="about" as={Link} smooth={true} duration={1000}><CgChevronDoubleDownO size='4em' /></NavLink>
          </IconContext.Provider></div>
      </div>

    </div>
  </div>;
}
export default Navbars;
