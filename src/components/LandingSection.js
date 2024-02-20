import React from "react";
import FullScreenSection from "./FullScreenSection";
import "./components.css";
const greeting = "Hello, I am Ryan!";
const bioGoal = "I am seeking fulltime software engineering roles in the United States.";
const bioEducation =
  "I graduated from the University of Washington with a bachelor's (2022) \n" +
  "and master's (2023) degree in Electrical and Computer Engineering.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <div className="fullscreen-section">
      <h1>{greeting}</h1>
      <h2>{bioGoal}</h2>
      <h2>{bioEducation}</h2>
    </div>
  );
};

export default LandingSection;
