import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { TbMessage2Bolt } from "react-icons/tb";

const Header = () => {
  return (
    <header className="w-full border-b border-black p-4 flex justify-between items-center fixed top-0">
      <Link className="text-xl font-bold flex justify-center items-center gap-2 z-20">
        <TbMessage2Bolt className="text-4xl"/>
        <h1>ChatHub.in</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
