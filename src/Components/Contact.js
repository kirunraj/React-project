import React from 'react';
import './Contact.css'
import { FloatingLabel, Form } from 'react-bootstrap';
import {Element} from 'react-scroll'

function Contact() {
  return <div>
      <Element name="contact">
    <div className='Container'>
    
        <div className="layout">
          <h1>Contact Us</h1>
          <hr></hr>
          <p>Let's discuss how we can improve your online presence.</p>
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Email Address" className="mb-3">
            <Form.Control type="email" placeholder="Email Address" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Budget" className="mb-3">
            <Form.Control type="text" placeholder="Budget" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control as="textarea" placeholder="Message" style={{ height: '150px' }} />
          </FloatingLabel>
          <button type="button" className="btn btn-outline">SEND</button>
        </div>

    </div>
    </Element>
  </div>
}

export default Contact
