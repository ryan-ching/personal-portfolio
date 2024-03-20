import { Heading, HStack, Badge, Highlight, Image, Text, VStack, Box, Tag } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, company, date, description, imageSrc, tags}) => {
  return (
    <Box 
    textAlign="center" height="sm" width="lg" mr={2} mb={8} borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="black">
      {/* <Image src={imageSrc} alt={title} maxH="75%"/> */}
        <Box d='flex' alignItems='baseline'>
          <Box>
            <Text color='white' fontWeight='bold'>{title}</Text>
            <Text color='white' fontWeight='semibold'>{company}</Text>
            {tags.map((tag) => (
                <Tag key={tag} backgroundColor="white" textColor="black" mb={2} mr={2}>
                  {tag}
                </Tag>
              ))}
            {/* <Text color='white' fontWeight='semibold'>{description}</Text> */}
          </Box>
          <Box>
            <Text color='white' fontWeight='semibold'>{date}</Text>
          </Box>
        </Box>
      </Box>
  );
};

export default Card;
