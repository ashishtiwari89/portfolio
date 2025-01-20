import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a
                    href="https://github.com/ashishtiwari89/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://instagram.com/ashishtiwari89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                >
                    <FaInstagram />
                </a>
            </div>
            <p className="footer-text">Copyright © Ashish Tiwari</p>
        </footer>
    );
};

export default Footer;
