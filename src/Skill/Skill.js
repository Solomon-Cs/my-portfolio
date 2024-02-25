import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div>
      <div className="skill_container">
        <div className="skill_head">
          <h1>Languge</h1>
        </div>
        <div className="skill_head">
          <h1>Frameworks</h1>
        </div>
        <div className="skill_head">
          <h1>Others</h1>
        </div>
      </div>
      <div className="skill_container2">
        <div className="skill_List">
          <h4>HTML</h4>
          <h4>JavaScript</h4>
          <h4>CSS</h4>
          <h4>React js</h4>
        </div>
        <div className="skill_List">
          <h4>Material UI</h4>
          <h4>Mantine</h4>
        </div>
        <div className="skill_List">
          <h4>MYSQL</h4>
          <h4>Teamwork</h4>
        </div>
      </div>
    </div>
  );
};

export default Skill;
