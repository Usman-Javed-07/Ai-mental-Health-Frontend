
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io"; 
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import styles from "../css/Header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  // Toggle the menu open/close state
  const handleButtonToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="./public/NavLogo.png" alt="website logo" />
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMenuOpen ? styles.active : ""
        }`}
      >
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/Vedios">Videos</NavLink>
        </li>
        <li>
          <NavLink to="/Articals">Articles</NavLink>
        </li>
        <li>
          <NavLink className={styles.logout} to="/"> <IoMdLogOut /> Logout</NavLink>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={handleButtonToggle}>
        {isMenuOpen ? <IoCloseCircleOutline /> : <IoIosMenu />}
      </div>
    </nav>
  );
};
