import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footerContent">
      <div className="footerContactInfo">
        <strong>Taniti Tourism Board</strong>
        <p>Address: 123 Island Blvd, Taniti City, Taniti</p>
        <p>Email: <a href="mailto:tourism@tanititravel.gov">tourism&#64;tanititravel.gov</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Tourism Office Hours: Monday to Friday, 8:00 AM - 5:00 PM (Local Time Zone)</p>
      </div>
      <div className="footerSocialMedia">
        <a href="https://www.facebook.com/"><img src="/assets/images/facebook.png" alt="Facebook" /></a>
        <a href="https://twitter.com/"><img src="/assets/images/twitter.png" alt="Twitter" /></a>
        <a href="https://www.instagram.com/"><img src="/assets/images/instagram.png" alt="Instagram" /></a>
        <a href="https://www.youtube.com/"><img src="/assets/images/youtube.png" alt="YouTube" /></a>
        <a href="https://www.linkedin.com/"><img src="/assets/images/linkedIn.png" alt="LinkedIn" /></a>
      </div>
    </div>
    <div className="footerBottom">
      <p>Official website of the Taniti Tourism Board. All information is provided as-is and subject to change.</p>
    </div>
  </footer>
);

export default Footer;
