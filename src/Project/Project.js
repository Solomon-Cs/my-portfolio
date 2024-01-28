import React from "react";
import "./Project.css";
import image1 from "../Image/portfolio1.png";
import image2 from "../Image/Employee HR Home.PNG";
import image3 from "../Image/MSMS Home page.PNG";
import image4 from "../Image/SLMS Home page.PNG";
import image5 from "../Image/work Example.PNG";
import image6 from "../Image/MSMS Super Admin page.PNG";
import {
  Box, Group, Input,
  Text,
  TextInput,
  Textarea,
  TypographyStylesProvider,
} from "@mantine/core";
import { Divider, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Button } from "@mui/material";



const Project = () => {
  const [focused, setFocused] = useState(false);

  // const [opened, { open, close}] = useDisclosure(false);

  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open4, setopen4] = useState(false);

  const openGitHab = () => {
    window.open("https://github.com/Solomon-Cs/react-project-example-v1", '_blank');
  };
  const openGitHabPage = () => {
    window.open("https://solomon-cs.github.io/react-project-example-v1/", '_blank');
  };
  const openGitHab2 = () => {
    window.alert("I will Deploy it next Time")
  };
  const openGitHabPage2 = () => {
    window.alert("I will Deploy it next Time")
  };


  return (
    <div className="Project_container_all">
      <h2 className="Project_h1">
        My Recent Works
        -------------------------------------------------
      </h2>
      <Divider width={10} variant="inset" component="h2" />

      <div className="project_container">
        <div>
          <img src={image2}  className="Imagesize0"></img>
        </div>
        <div>
          <Text lineClamp={10} component="div">
            <TypographyStylesProvider>
              <h3> Employee Hierarchy Registration </h3>
              <p>
                The application is designed to manage employee positions or{" "}
                <br />
                roles in a hierarchical structure.The positions have a<br />
                parent-child relationship, forming a tree-like structure.For
                <br />
                example, the CEO can be the root position with no parent, and
                <br />
                other positions like CFO, CTO, and more can be children of the
                <br />
                CEO.The positions can have unlimited levels of nesting, allowing
                <br />
                for a complex organizational structure.
              </p>
            </TypographyStylesProvider>
          </Text>
          <Group justify="center" mt="xl">
            <Button variant="outlined"> React Js</Button>
            <Button variant="outlined"> Node js</Button>
            <Button variant="outlined"> MYSQL</Button>
          </Group>
          <Group justify="center" mt="xl">
            <Button onClick={() => setopen(true)} variant="contained">
              See Project
            </Button>
          </Group>
        </div>
      </div>

      <h2 className="Project_h1">
        Other Projects -----------------------------------------------
      </h2>
      <div className="project_List">
        <div className="papers">
          <Paper
            sx={{
              height: 500,
              width: 400,
              borderRadius: 5,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <img src={image6} className="Imagesize1"></img>
            <Group justify="center" mt="xl">
              <Button variant="outlined">React Js</Button>
              <Button variant="outlined">Node js</Button>
              <Button variant="outlined">MYSQL</Button>
            </Group>
            <div className="Project_list_fotter">
              <h3>Multi High School Mangement</h3>
              <Button onClick={() =>setopen2(true)} className="see_btn" justify="center" variant="contained">
                See Project
              </Button>
            </div>
          </Paper>
        </div>

        <div className="papers">
          <Paper
            sx={{
              height: 500,
              width: 400,
              borderRadius: 5,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <img className="Imagesize1" src={image4}></img>
            <Group justify="center" mt="xl">
              <Button variant="outlined">HTML</Button>
              <Button variant="outlined">CSS</Button>
              <Button variant="outlined">JavaScript</Button>
              <Button variant="outlined">PHP</Button>
            </Group>
            <div className="Project_list_fotter">
              <h3>Lunch Mangement System</h3>
              <Button onClick={() => setopen3(true)} justify="center" variant="contained">
                See Project
              </Button>
            </div>
          </Paper>
        </div>

        <div className="papers">
          <Paper
            sx={{
              height: 500,
              width: 400,
              borderRadius: 5,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <img src={image5} className="Imagesize1"></img>
            <Group justify="center" mt="xl">
              <Button variant="outlined">React Js</Button>
              <Button variant="outlined">MUI</Button>
              <Button variant="outlined">Mantine</Button>
            </Group>
            <div className="Project_list_fotter">
              <h3>Simple React App </h3>
              <Button onClick={() => setopen4(true)} justify="center" variant="contained">
                See Project
              </Button>
            </div>
          </Paper>
        </div>
      </div>

{/*        This is Modal for Employee Hierarchy          */}

      <Modal
        size="80%"
        opened={open}
        onClose={() => setopen(false)}
        title="Employee Hierarchy Registration"
        centered
      >
        <div className="project_container1">
          <div>
            <img src={image2} className="Imagesize1"></img>
          </div>
          <div>
            <Text lineClamp={10} component="div">
              <TypographyStylesProvider>
                <h3> Employee Hierarchy Registration </h3>
                <p>
                  The application is designed to manage employee positions or{" "}
                  roles in a hierarchical structure.The positions have a
                  parent-child relationship, forming a tree-like structure.For
                  example, the CEO can be the root position with no parent, and
                  other positions like CFO, CTO, and more can be children of the
                  CEO.
                </p>
              </TypographyStylesProvider>
            </Text>
            <Group justify="center" mt="md" mb={"xl"}>
              <Button onClick={openGitHabPage2} variant="contained">
                See Live
              </Button>
              <Button onClick={openGitHab2} variant="contained">
                See Source
              </Button>
            </Group>
          </div>
        </div>
      </Modal>
      
 {/*        This is Modal for Employee Hierarchy          */}

      <Modal
        size="70%"
        opened={open2}
        onClose={() => setopen2(false)}
        title="Multi High School System"
        centered
      >
        <div className="project_container1">
          <div>
            <img src={image3} className="Imagesize2"></img>
          </div>
          <div>
            <Text lineClamp={10} component="div">
              <TypographyStylesProvider>
                <h3> Multi High School Management System </h3>
                <p>
                  Multi High School Management System is developed to replace the manual ( current) system with the aim of improving the data integrity, confidentiality and quality of the educational
                    and information handling process with regard to time as well as storage efficiency and also
                    decreasing man power system.
                </p>
              </TypographyStylesProvider>
            </Text>
            <Group justify="center" mt="md" mb={"xl"}>
              <Button onClick={openGitHabPage2}  variant="contained">
                See Live
              </Button>
              <Button onClick={openGitHab2} variant="contained">
                See Source
              </Button>
            </Group>
          </div>
        </div>
      </Modal>

      <Modal
        size="70%"
        opened={open3}
        onClose={() => setopen3(false)}
        title="Simple React App"
        centered
      >
        <div className="project_container1">
          <div>
            <img src={image4} className="Imagesize2"></img>
          </div>
          <div>
            <Text lineClamp={10} component="div">
              <TypographyStylesProvider>
                <h3> Launch Management System </h3>
                <p>
                Launch Management System is a System designed to minimize the time lost by the student 
                and teacher at Launch for wating the sevice. so this system allow us to order
                and get the service any service at any where.
                </p>
              </TypographyStylesProvider>
            </Text>
            <Group justify="center" mt="md" mb={"xl"}>
              <Button onClick={openGitHabPage2}  variant="contained">
                See Live
              </Button>
              <Button onClick={openGitHab2} variant="contained">
                See Source
              </Button>
            </Group>
          </div>
        </div>
      </Modal>

      <Modal
        size="70%"
        opened={open4}
        onClose={() => setopen4(false)}
        title="Simple React App"
        centered
      >
        <div className="project_container1">
          <div>
            <img src={image5} className="Imagesize2"></img>
          </div>
          <div>
            <Text lineClamp={10} component="div">
              <TypographyStylesProvider>
                <h3> Simple React App </h3>
                <p>
                  The application is designed to Implement react js future such as page routing react
                  component rendering and staying.
                </p>
              </TypographyStylesProvider>
            </Text>
            <Group justify="center" mt="md" mb={"xl"}>
              <Button onClick={openGitHabPage}  variant="contained">
                See Live
              </Button>
              <Button onClick={openGitHab} variant="contained">
                See Source
              </Button>
            </Group>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default Project;
