import React, { createContext, useState } from "react";

export const NavContext = createContext();
const NavState = ({ children }) => {
  const [navLinks] = useState([
    {
      link: "Home",
      path: "/home",
    },
    {
      link: "Privacy",
      path: "/privacy",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "More",
      path: "/more",
    },
  ]);
  const [showNav, setShowNav] = useState(false);
  const handleNav = (e) => {
    if(e!="")
    setShowNav(!showNav);
  };
  return (
    <NavContext.Provider value={{ navLinks, showNav, handleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavState;
