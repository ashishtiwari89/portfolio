import React from "react";
import "../styles/About.css";
import profileImage from "../assets/profile.png";
import profileImageDark from "../assets/profiledark.png";
import JavaLogo from "../assets/java-logo.png";
import MongoLogo from "../assets/mongo-db.png";

const About = ({ isDarkMode }) => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                {/* Left Section: Photo Card */}
                <div className="about-photo-card">
                    <img
                        src={isDarkMode ? profileImageDark : profileImage} // Conditional rendering for profile image
                        className="about-photo"
                        alt="Profile"
                    />
                    <div className="tech-icons">
                        <img
                            src={JavaLogo}
                            alt="Java"
                            className="tech-icon"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React"
                            className="tech-icon"
                        />
                        <img
                            src={MongoLogo}
                            alt="MongoDB"
                            className="tech-icon"
                        />
                    </div>
                </div>

                {/* Right Section: Browser Mockup */}
                <div className="browser-mockup">
                    <div className="browser-header">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-content">
                        <h2>Hi 👋</h2>
                        <p>I am a Full Stack Software Developer highly skilled in programming languages like Java, JavaScript, TypeScript, Python, PHP, HTML, and CSS. I have extensive experience with frameworks such as Spring, Spring Boot, Next.js, and Express, along with expertise in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB. My technical background includes working with caching and messaging systems like Redis, Kafka, and RabbitMQ, deploying cloud-native applications on AWS and GCP, and maintaining CI/CD pipelines using Docker and Kubernetes. I specialize in creating scalable microservices, robust APIs, and engaging, intuitive user interfaces that drive business success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
