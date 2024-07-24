// src/components/Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">TOILETID</div>
        <div className="footer-socials">
          <a
            href="https://wa.me/+6281574633530"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="social-icon whatsapp"
              style={{ color: "#fff" }}
            />
          </a>
          <a
            href="https://www.facebook.com/toiletid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="social-icon facebook"
              style={{ color: "#fff" }}
            />
          </a>
          <a
            href="https://www.instagram.com/toiletid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="social-icon instagram"
              style={{ color: "#fff" }}
            />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TOILET.ID. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
