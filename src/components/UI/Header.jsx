
import { NavLink } from "react-router-dom";
import "../css/Header.module.css"

export const Header = () => {
  return (

    <nav>
      <div>
        <img src="./public/NavLogo.png" alt="website logo" />
      </div>
      <div>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Music">Music</NavLink>
      <NavLink to="/Vedios">Video</NavLink>
      <NavLink to="/Articals">Articals</NavLink>
      <NavLink to="/Logout">Logout</NavLink>
      </div>
    </nav>
  );
};



