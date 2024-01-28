import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  // logout function
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div
          title={"Phone : 0923817004 \n Email: solomonshiferawww@gmail.com"}
          className="logo"
        >
          <h3>Solomon Shiferaw</h3>
        </div>
        <div>
          <ul
            id="navbar"
            className={state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <Link onClick={handleClick} to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/Project">
                Project
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/About">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/Skill">
                {" "}
                Skill{" "}
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i
            id="bar"
            className={state.clicked ? "fas fa-times" : "fas fa-bars"}
          >
            <MenuIcon />
          </i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { useNavigate } from "react-router-dom";
// import Link from "@mui/material/Link";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   const [state, setState] = useState({ clicked: false });
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     event.preventDefault();
//     setState({ clicked: !state.clicked });
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setState({ clicked: false });
//   };

//   return (
//     <>
//       <nav>
// <div
//   title={"Phone : 0923817004 \n Email: solomonshiferawww@gmail.com"}
//   className="logo"
// >
//   <h2>Solomon Shiferaw</h2>
// </div>
//         <div>
//           <ul
//             id="navbar"
//             className={state.clicked ? "navbar active" : "navbar"}
//           >
//             <li>
//               <Link
//                 component="button" // Use custom component
//                 onClick={() => handleNavigation("/Home")} // Handle navigation manually
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 component="button" // Use custom component
//                 onClick={() => handleNavigation("/Project")} // Handle navigation manually
//               >
//                 Project
//               </Link>
//             </li>
//             <li>
//               <Link
//                 component="button" // Use custom component
//                 onClick={() => handleNavigation("/About")} // Handle navigation manually
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 component="button" // Use custom component
//                 onClick={() => handleNavigation("/Skill")} // Handle navigation manually
//               >
//                 Skill
//               </Link>
//             </li>
//             <li>
//               <Link
//                 component="button" // Use custom component
//                 onClick={() => handleNavigation("/Contact")} // Handle navigation manually
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div id="mobile" onClick={handleClick}>
//           <i
//             id="bar"
//             className={state.clicked ? "fas fa-times" : "fas fa-bars"}
//           >
//             <MenuIcon />
//           </i>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
