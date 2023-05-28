import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Naresh Gujjari via email @ ngujjari2021@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. </p>
        <p>Email: <EmailLink /></p>
      </div>
      <div className="email-at">
        <p>Phone:</p><a href="tel:+15089250638">508-925-0638</a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
