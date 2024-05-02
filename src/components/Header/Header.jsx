import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-black p-4 flex justify-between items-center">
      <Link className="text-xl font-bold">
        <h1>ChatHub.in</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
