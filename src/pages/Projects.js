import React, { useState } from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

// Import images explicitly
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";
import project4Image from "../assets/project4.png";
import project5Image from "../assets/project5.png";

const projectData = [
    {
        id: 1,
        title: "E-commerce Website",
        image: project1Image,
        description: "",
        github: "https://github.com/ashishtiwari89/ShopSync",
    },
    {
        id: 2,
        title: "ELearning Platform",
        image: project2Image,
        description: "",
        github: "https://github.com/ashishtiwari89/LearnLink",
    },
    {
        id: 3,
        title: "Food Ordering Website",
        image: project3Image,
        description: "",
        github: "https://github.com/ashishtiwari89/BiteBuddy",
    },
    {
        id: 4,
        title: "Healthcare Management System",
        image: project4Image,
        description: "",
        github: "https://github.com/ashishtiwari89/WellNest",
    },
    {
        id: 5,
        title: "Collaborative Workspace App",
        image: project5Image,
        description: "",
        github: "https://github.com/ashishtiwari89/Prioritize",
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        style={{ backgroundImage: `url(${project.image})` }}
                        onClick={() => openProject(project)}
                    >
                        <div className="project-overlay">
                            <h2 className="project-title">{project.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Project Details */}
            {selectedProject && (
                <div className="project-modal">
                    <div className="project-modal-content">
                        <span className="modal-close" onClick={closeProject}>
                            &times;
                        </span>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="modal-image"
                        />
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        <p className="modal-description">{selectedProject.description}</p>
                        <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-github-link"
                        >
                            <FaGithub /> View on GitHub
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
