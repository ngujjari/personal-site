import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Naresh Gujjari</h2>
        <p><a href="mailto:ngujjari2021@gmail.com">ngujjari2021@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Naresh Gujjari. Solutions Architect with 18 years of expertise in developing
        and deploying scalable solutions. Specialized in Java microservices, React-based
        micro front ends, Spring Boot, Kafka, AWS (EC2, S3, ECS, API Gateway, Elastic Load Balancer
        , Beanstalk, Amplify, Lambda), and cutting-edge technologies.
        Accomplished in fostering collaboration across diverse teams to deliver top-notch solutions
        aligned with business goals.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : '' /*<Link to="/about" className="button">About Me</Link>*/ }
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Naresh&apos;Gujjari <Link to="/">nareshgujjari.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
