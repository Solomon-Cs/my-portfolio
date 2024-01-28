import React from "react";
import { Button } from "@mantine/core";
import './About.css'
import DocumentFile from '../Image/SolomonsCV.pdf';

const About = () => {
  const openReactDocs = () => {
    window.open(DocumentFile, '_blank');
  };

  return (
    <div className="about_container">
      <h1>About Me</h1>
      <p>
        I am a Junior software developer with a background in JavaScript, CSS,
        HTML, React,<br />
        Redux, Material UI and Mantine.I have strong problem-solving skills,<br />
        and I can learn new things quickly. I am looking for a fast-growing
        technology <br />
        company or startup to which I can help and contribute as a Front-end
        developer.
      </p>
      <Button onClick={openReactDocs} className="resumeBtn" >My Resume</Button>
    </div>
  );
};

export default About;
