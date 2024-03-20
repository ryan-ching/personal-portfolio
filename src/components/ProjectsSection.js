import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  HStack, 
  VStack,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react'
import Card from "./Card";
import {projects} from "./Projects";
import {fieldTag, languageTag, typeTag} from "./Tags";
const ProjectsSection = () => {
  const [selectedFieldTag, setSelectedFieldTag] = React.useState([]);
  const [selectedLanguageTag, setSelectedLanguageTag] = React.useState([]);
  const [selectedTypeTag, setSelectedTypeTag] = React.useState([]);


  
  const filteredProjects = (projects, fieldTag, languageTag, typeTag) => {
    return projects.filter((project) => (
      (!fieldTag.length || fieldTag.every((tag) => project.tags.includes(tag))) &&
      (!languageTag.length || languageTag.every((tag) => project.tags.includes(tag))) &&
      (!typeTag.length || typeTag.every((tag) => project.tags.includes(tag)))
    ));
  };

  return (
    <FullScreenSection
      backgroundColor= "#000000"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <VStack alignItems="center">
        <Heading as="h2">Type</Heading>
        <HStack>
          {Array.from(typeTag).map((tag) => (
            <Button 
              key={tag} 
              backgroundColor={selectedTypeTag.includes(tag) ? "red.500" : "white"}
              variant="solid" 
              onClick={() => {
                const newSelectedTags = selectedTypeTag.includes(tag)
                  ? selectedTypeTag.filter((t) => t !== tag)
                  : [...selectedTypeTag, tag];
                  setSelectedTypeTag(newSelectedTags)
              }} 
              isChecked={selectedTypeTag.includes(tag)}>
              {tag}
            </Button>
          ))}
        </HStack>
        <Heading as="h2">Field</Heading>
        <HStack>
          {Array.from(fieldTag).map((tag) => (
            <Button 
              key={tag} 
              backgroundColor={selectedFieldTag.includes(tag) ? "green.500" : "white"}
              variant="solid" 
              onClick={() => {
                const newSelectedTags = selectedFieldTag.includes(tag)
                  ? selectedFieldTag.filter((t) => t !== tag)
                  : [...selectedFieldTag, tag];
                  setSelectedFieldTag(newSelectedTags)
              
              }} 
              isChecked={selectedFieldTag.includes(tag)}>
              {tag}
            </Button>
          ))}
        </HStack>
        <Heading as="h2">Language</Heading>
        <HStack>
          {Array.from(languageTag).map((tag) => (
            <Button 
              key={tag} 
              backgroundColor={selectedLanguageTag.includes(tag) ? "blue.500" : "white"}
              variant="solid" 
              onClick={() => {
                const newSelectedTags = selectedLanguageTag.includes(tag)
                  ? selectedLanguageTag.filter((t) => t !== tag)
                  : [...selectedLanguageTag, tag];
                  setSelectedLanguageTag(newSelectedTags)
              }} 
              isChecked={selectedLanguageTag.includes(tag)}>
              {tag}
            </Button>
          ))}
        </HStack>
      </VStack>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="flex-end">
        {filteredProjects(projects, selectedFieldTag, selectedLanguageTag, selectedTypeTag)
            .sort((a,b) => b.year - a.year)
            .map((project, index) => (
              <React.Fragment key={index}>
                <Card
                  title={project.title}
                  company={project.company}
                  date={project.date}
                  description={project.description}
                  imageSrc={project.getImageSrc()}
                  tags={project.tags}
                />
                {index !== projects.length - 1 && <Box mt={4} />}
              </React.Fragment>
           ))}     
      </Box>
        
    </FullScreenSection>
  );
};

export default ProjectsSection;
