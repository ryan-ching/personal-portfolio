import React from "react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const projects = [
  {
    title: "React Calculator",
    description: "Simple Calculator built with React, using hooks and context to manage state",
    getImageSrc: () => require("../images/raspberryPi.png"),
  },
  {
    title: "Device Movement Detection",
    description: "Python implementation tracking rotational movement of a milimiter wave radar.",
    getImageSrc: () => require("../images/raspberryPi.png"),
  },
  {
    title: "Image Quality Control",
    description:
      "Machine learning implementation using YOLOv5 to detect unwanted elements in images.",
    getImageSrc: () => require("../images/raspberryPi.png"),
  },
  {
    title: "GPIB Bus Controller",
    description: "GPIB bus to remotely control hardware instruments connected to a raspberry pi.",
    getImageSrc: () => require("../images/raspberryPi.png"),
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;
