import React from 'react';
import logo from '../../assets/22.png';
import './footer.css';

const Footer = () => (
  <div className="t__footer section__padding">
    <div className="t__footer-heading">
      <h1 className="gradient__text">Do you want to get our products</h1>
    </div>
    <div className="t__footer-btn">
      <p>Contact us for more</p>
    </div>
    <div className="t__footer-links">
      <div className="t__footer-links_logo">
        <img src={logo} alt="t_logo" />
        <p> <br /> All Rights Reserved</p>
      </div>
      <div className="t__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="t__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="t__footer-links_div">
        <h4>Get in touch</h4>
        <p>085-132567</p>
        <p>aravindgajay@gmail.com</p>
      </div>
    </div>
    <div className="t__footer-copyright">
      <p>@2022 TEA. All rights reserved.</p>
    </div>
  </div>
);
export default Footer;
