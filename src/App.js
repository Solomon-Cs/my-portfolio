import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";

import Home from "./Home/Home";
import Header from "./Header/Navbar";
import Project from "./Project/Project";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Skill from "./Skill/Skill";
import Footer from "./Footer/Footer";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Router >
        <Header />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Project" exact element={<Project />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Skill" exact element={<Skill />} />
            <Route path="/Contact" exact element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
