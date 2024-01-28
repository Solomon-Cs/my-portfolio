import React from "react";
import "./Home.css";
import bg from "../Image/portfolio1.png";
import { Button, Divider } from "@mantine/core";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";

const backgroundImageUrl = bg;

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "700px", // Set a height for your container
};


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Home_container" style={containerStyle}>
        <div className="container">
          <h1 className="Heading1">Hi, I am Solomon</h1>
          <h3>I'm a Junior Software Developer</h3>
          <p>
            I'm looking for a fast-growing technology company or startup 
            to which I can help and contribute as a front-end developer. I would love to
            learn about your company, 
            feel free to connect with me!
          </p>
        </div>
        <Button onClick={()=>{ navigate("/Contact")} } mt={40} ml={140}>
          Conatct Me
        </Button>
      </div>
      <Divider />
      <About />
      <Divider />
      <Skill />
      <Divider />
      <Contact />
    </>
  );
};

export default Home;
