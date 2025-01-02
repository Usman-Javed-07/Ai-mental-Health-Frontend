// import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (e.g., remove tokens from localStorage)
    localStorage.removeItem('authToken'); 

    navigate('/');
  };

  return (
    <NavLink
      to="/"
      onClick={(e) => {
        e.preventDefault(); 
        handleLogout();
      }}
    >
      Logout
    </NavLink>
  );
};

export default Logout;
