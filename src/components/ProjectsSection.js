import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Device Movement Detection - UW ENGINE Capstone",
    date: "January 2023 - June 2023",
    description:
      <list>
        <li>Led algorithm development for a team of 7, creating and implementing an algorithm for tracking the
rotational movement of a radar, given a point cloud of detections from radar. </li>
        <li>Used thresholding and nearest neighbor matching to track radar detection trajectories across time steps
and implemented averaging for trajectories to estimate overall radar rotation. (Python, NumPy, SciPy)</li>
        <li>Presented algorithm in live testing environments achieving accuracy within 5 degrees for all tests.</li>
      </list>,
    getImageSrc: () => require("../images/dmd.png"),
  },
  {
    title: "Software Engineer Intern - Papaya IoT",
    date: "May 2021 - September 2021",
    description:
      "GPIB instrument (Agilent, Keysight, Keithley) driver development and API for users to control measurement equipment in R&D and test environment.",
    getImageSrc: () => require("../images/raspberryPi.png"),
  },
  {
    title: "Image Quality Control - UW ENGINE Capstone",
    date: "January 2022 - June 2022",
    description:
      <list>
        <li>Developed a custom dataset and trained on YOLOv5, detecting unwanted elements in seller-uploaded
images and storing the location and class of elements. (Python, YOLOv5)</li>
        <li>Developed web application, where a user uploads images and a resulting image displays all detection
locations of logos, watermarks, etc. (Flask)</li>
      </list>,
    getImageSrc: () => require("../images/githubLogo.png"),
  },
  {
    title: "Graduate Researcher - UW Applied Phsycics Lab",
    date: "June 2022 - December 2022",
    description:
    <list>
      <li>
      Given a video of moving objects, created a graph based on the spatial and temporal location of objects. Detected and tracked the movement of each detection. (Python, Deep Graph Library (DGL), NetworkX)
      </li>
      <li>
      Developed web application, where a user uploads images and a resulting image displays all detection locations of logos, watermarks, etc. (Flask)
      </li>
    </list>,
    getImageSrc: () => require("../images/githubLogo.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            date={project.date}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
