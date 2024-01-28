import React from "react";
import "./Contact.css";
import { Group, Input, TextInput, Textarea } from "@mantine/core";
import { Button } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [focused, setFocused] = useState(false);
  const sendMessage = () =>{
    window.alert("You can not send message Know it is re bulid")
  }

  return (
    <div>
      <div className="contact_container">
        <div>
          <h2>
            If you would Like to
            <br /> know more about
            <br /> my previous work
            <br /> and skills please put your
            <br /> message here !!!<br /><br />

          </h2>
          <p>
          Address <br />
            Emaial: solomonshiferawww@gmail.com<br />
            Phone: 0923817004
          </p>
        </div>
        <div className="contact_form">
          <TextInput
            placeholder="Full Name"
            type="text"
            mt={"lg"}
            size="xl"
            width="900px"
          />
          <TextInput
            placeholder="Email Address"
            type="email"
            mt={"lg"}
            size="lg"
            width={"500px"}
          />
          <Textarea
            placeholder="Enter Your Missage Hear..."
            mt={"lg"}
            mb={"lg"}
            size="lg"
            width={"500px"}
          />
          <Group justify="center" mt="xl">
            <Button onClick={sendMessage} variant="contained">Send</Button>{" "}
          </Group>
        </div>
      </div>
    </div>
  );
};

export default Contact;
