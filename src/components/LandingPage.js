import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import GallerySlider from "./GallerySlider";

library.add(fab);



const LandingPage = () => {
  return (

    <div className="landing-page-container">
      <h1>Goshen Retirement Homes</h1>
      <section id="about" className="about-us-section">
        <div className="about-us-content">
        </div>
      </section>

      <section id="about" className="about-us-message">
       
        <h3>A place of rest and comfort for the ageing in which Retirement Living is made homely.</h3><h2>Welcome to Goshen Retirement Homes!</h2>
        <h3>At Goshen, we are committed to changing the 'Nursing Home narrative in America'.
          We are not a nursing home</h3>
        <h2> - We are HOME.</h2>
      </section>


      <section id="services" className="services-section">
        <h2>We offer</h2>
        <ul>
          <li>Private Retirement Living Care </li>
          <li>Long Term Care </li>
          <li>Short Term Rehabilitative Care </li>
          <li>Respite Care </li>
        </ul>
        <div className="services-image">
          <img src={require("../images/Services.png")} alt="Our Services" />
        </div>
      </section>

      <section id="location" className="location-section">
        <h2>Location</h2>
        <ul>
          <li>We are located in Harrisonburg Virginia, situated in the Shenandoah Valley.</li>
        </ul>
      </section>

      <GallerySlider />

      <section id="contact" className="contact-us-section">
        <div className="contact-us-container">
          <h2>Contact Us</h2>
          <h3>Call for personalised Pricing, Availability, Clinical Requirements, Touring & Inquiries about the Waiting List.</h3>
          <form className="contact-form" method="post" action="contact-form-handler.php">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" row="6" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <h3>But on that day I will set apart the land of Goshen, where my people dwell, so that no swarms of flies shall be there, that you may know that I am the Lord in the midst of the earth.  Exodus 8:22.</h3>
      <br></br>
      <h3>We accept Private Pay ONLY.</h3>
    </div>

  );
};

export default LandingPage;
