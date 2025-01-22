import React from "react";
import "../styles/Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGoogle, FaHourglassHalf } from "react-icons/fa";

const experienceData = [
    {
        title: "Web Developer",
        company: "CSU Fullerton Auxiliary Services Corporation "
        duration: "05.2022 - 08.2024",
        skills: ["Java", "NetSuite Commerce", "HTML5", "CSS3", "JavaScript", "OracleDB", "REST API"],
        icon: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                F
            </div>
        ),
        iconBg: "#ff8316",
        color: "#000",
    },
    {
        title: "Senior Software Engineer",
        company: "Ntier Infotech, Indore, India",
        duration: "09.2019 - 10.2021",
        skills: ["REST API", "SQL", "JavaScript", "Amazon S3", "Kubernets", "Java", "SQS", "Docker", "Python"],
        icon: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                N
            </div>
        ),
        iconBg: "#C70039",
        color: "#000",
    },
    {
        title: "Software Engineer Intern",
        company: "Google",
        duration: "04.2016 - 08.2016",
        skills: ["ETL", "Docker", "Kubernetes", "Go", "Google Cloud Platform (GCP)"],
        icon: <FaGoogle />, // Replaced hourglass with Angular icon
        iconBg: "#ffcc00",
        color: "#fff",
    },
];

const Experience = () => {
    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience</h1>
            <VerticalTimeline>
                {experienceData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={item.duration}
                        iconStyle={{ background: item.iconBg, color: item.color }}
                        icon={item.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                        <div className="skills-tags">
                            {item.skills.map((skill, idx) => (
                                <span key={idx} className="tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
                {/* Hourglass icon at the end of the timeline */}
                <VerticalTimelineElement
                    iconStyle={{ background: "#f4b400", color: "#000" }}
                    icon={<FaHourglassHalf />}
                    contentStyle={{ display: "none" }}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
