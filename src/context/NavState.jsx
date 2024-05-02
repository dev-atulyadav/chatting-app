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
  return (
    <NavContext.Provider value={{ navLinks }}>{children}</NavContext.Provider>
  );
};

export default NavState;
