import React from "react";
import { FaLaptopCode, FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
import Typewriter from "typewriter-effect";
import Switch from "react-switch"; // Import Switch for theme toggle
import "../styles/Home.css";

const Home = ({ isDarkMode, handleToggle }) => {
    return (
        <div className="section home-container">
            <FaLaptopCode className="home-icon" />
            <h1 className="home-name">Ashish Tiwari</h1>
            <div className="home-title">
                <Typewriter
                    options={{
                        strings: ["Software Engineer", "Full-Stack Developer", "Java Developer", "React Developer"],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                    }}
                />
            </div>
    );
};

export default Home;
