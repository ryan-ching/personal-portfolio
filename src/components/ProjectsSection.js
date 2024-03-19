import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Checkbox, Heading, Stack } from "@chakra-ui/react";
import Card from "./Card";
import {projects} from "./Projects";
// Add a sorting function to sort projects by date
// add a vertical navigation bar
// 3 Drop down menu for project types
// Filter for professional projects type (Internship/School/Research/Personal)
// Filter for field
// Filter for skills used

const ProjectsSection = () => {
  const [selectTag, setSelectTag] = React.useState("All");
  
    const toggleTag = (tag) => {
      if (selectTag.includes(tag)) {
        setSelectTag(selectTag.filter((t) => t !== tag));
      } else {
        setSelectTag([...selectTag, tag]);
      }
    };
  
  const filteredProjects = selectTag.length
    ? projects.filter((project) => project.tags.some((tag) => selectTag.includes(tag)))
    : projects;

  return (
    <FullScreenSection
      backgroundColor= "#000000"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Stack direction="row" spacing={4}>
        {Array.from(new Set(projects.flatMap((item) => item.tags))).map((tag) => (
          <Checkbox key={tag} colorScheme="white" onChange={() => toggleTag(tag)} isChecked={selectTag.includes(tag)}>
            {tag}
            </Checkbox>
        ))}
      </Stack>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {filteredProjects.map((project) => (
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
