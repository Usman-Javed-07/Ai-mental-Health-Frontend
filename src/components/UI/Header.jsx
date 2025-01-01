
// import { NavLink } from "react-router-dom";
// export const Header = () => {
//     return (
//         <div className="header-section">
//                <nav className="navbar">
//                  <ul>
//                    <li><NavLink to="/Home">Home</NavLink></li>
//                    <li><NavLink to="/About">About</NavLink></li>
//                    <li><NavLink to="/Music">Music</NavLink></li>
//                    <li><NavLink to="/Vedios">Vedios</NavLink></li>
//                    <li><NavLink to="/Contact">Contact</NavLink></li>
//                  </ul>
//                </nav>
//         </div>
//     )
// }

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Music">Music</NavLink>
      <NavLink to="/Vedios">Vedios</NavLink>
    </nav>
  );
};

