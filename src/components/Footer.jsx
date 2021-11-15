import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; Copyright {new Date().getFullYear()} <span>Patrick Karanja</span>
        . All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
