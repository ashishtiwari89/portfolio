import React from "react";
import { FaLaptopCode } from "react-icons/fa"; // Only FaLaptopCode is needed now
import Typewriter from "typewriter-effect";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="section home-container">
            <FaLaptopCode className="home-icon" />
            <h1 className="home-name">Ashish Tiwari</h1>
            <div className="home-title">
                <Typewriter
                    options={{
                        strings: [
                            "Software Engineer",
                            "Full-Stack Developer",
                            "Java Developer",
                            "React Developer"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
