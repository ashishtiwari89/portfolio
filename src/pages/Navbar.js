/*
import React, { useState } from "react";

const Navbar = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMenuClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <nav className="navbar">
*/
           // {/* Hamburger Menu */}
/*
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}></div>
            </div>

            //{/* Navbar Links */ //}
/*
            <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
                <li onClick={() => handleMenuClick("home")}>Home</li>
                <li onClick={() => handleMenuClick("about")}>About</li>
                <li onClick={() => handleMenuClick("projects")}>Projects</li>
                <li onClick={() => handleMenuClick("skills")}>Skills</li>
                <li onClick={() => handleMenuClick("experience")}>Experience</li>
                <li onClick={() => handleMenuClick("contact")}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
*/

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Switch from "react-switch";
import "../styles/Navbar.css"; // Create/update this CSS file for new styling

const Navbar = ({ scrollToSection, isDarkMode, handleToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                {/* Left: Logo */}
                <div className="navbar-logo" onClick={() => handleMenuClick("home")}>
                    Ashish Tiwari
                </div>

                {/* Center: Menu Links */}
                <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                    <li onClick={() => handleMenuClick("home")}>Home</li>
                    <li onClick={() => handleMenuClick("about")}>About</li>
                    <li onClick={() => handleMenuClick("projects")}>Projects</li>
                    <li onClick={() => handleMenuClick("skills")}>Skills</li>
                    <li onClick={() => handleMenuClick("experience")}>Experience</li>
                    <li onClick={() => handleMenuClick("contact")}>Contact</li>
                </ul>

                {/* Right: Socials, Theme Toggle, Resume */}
                <div className="navbar-right">
                    <a href="https://github.com/ashishtiwari89" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="navbar-icon" />
                    </a>
                    <a href="https://linkedin.com/in/ashish989" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="navbar-icon" />
                    </a>
                    <Switch
                        checked={isDarkMode}
                        onChange={handleToggle}
                        checkedIcon={<span className="switch-icon">🌜</span>}
                        uncheckedIcon={<span className="switch-icon">🌞</span>}
                        onColor="#333"
                        offColor="#ddd"
                    />
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
