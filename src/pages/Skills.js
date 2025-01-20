import React from "react";
import "../styles/Skills.css";
import { Icon } from "@iconify/react";

// Skill icons from Iconify
const skillsData = [
    { name: "Java", icon: "devicon:java" },
    { name: "JavaScript", icon: "devicon:javascript" },
    { name: "TypeScript", icon: "devicon:typescript" },
    { name: "HTML5", icon: "devicon:html5" },
    { name: "CSS3", icon: "devicon:css3" },
    { name: "Python", icon: "devicon:python" },
    { name: "Go", icon: "vscode-icons:file-type-go" },
    { name: "SQL", icon: "vscode-icons:file-type-sql" },
    { name: "Spring", icon: "devicon:spring" },
    { name: "React", icon: "devicon:react" },
    { name: "Next.js", icon: "devicon:nextjs" },
    { name: "Vue", icon: "devicon:vuejs" },
    { name: "Material UI", icon: "logos:material-ui" },
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "Express", icon: "devicon:express" },
    { name: "Angular", icon: "devicon:angular" },
    { name: "Bootstrap", icon: "devicon:bootstrap" },
    { name: "Tailwind", icon: "devicon:tailwindcss" },
    { name: "jQuery", icon: "devicon:jquery" },
    { name: "MySQL", icon: "devicon:mysql" },
    { name: "PostgreSQL", icon: "devicon:postgresql" },
    { name: "MongoDB", icon: "devicon:mongodb" },
    { name: "Cassandra", icon: "devicon:cassandra" },
    { name: "Redis", icon: "devicon:redis" },
    { name: "Kafka", icon: "skill-icons:kafka" },
    { name: "RabbitMQ", icon: "devicon:rabbitmq" },
    { name: "Git", icon: "devicon:git" },
    { name: "Jenkins", icon: "devicon:jenkins" },
    { name: "Docker", icon: "devicon:docker" },
    { name: "Kubernetes", icon: "devicon:kubernetes" },
    { name: "AWS", icon: "vscode-icons:file-type-aws" },
    { name: "GCP", icon: "devicon:googlecloud" },
];

const Skills = () => {
    return (
        <>
            <h1 className="skills-title">Skills</h1>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <Icon icon={skill.icon} className="skill-icon" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;
