// import React from "react";
// import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import "./Footer.css";
// // import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="footer-row-container">
//           <Col lg="3" md="6" className="mb-1">
//             solomonshiferawww@gmail.com
//           </Col>
//           <Col lg="3" md="6" className="mb-1">
//             <p> &#169; Copyright for copy Medium Lavel Organization</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import { Text } from "@mantine/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="fotter">
      <div className="fotter_icon">
        <a className="fotter_icon" href="https://github.com/solomon-Cs">
          <GitHubIcon style={{ color:"white" }} />
        </a>
        <a className="fotter_icon" href="mailto:solomonshiferawww@gmail.com">
          <EmailIcon style={{color:"white" }} />
        </a>
      </div>
      <div className="fotter_text">
        <Text> &#169; Copyright for Solomon Shiferaw</Text>
      </div>
    </div>
  );
};

export default Footer;
