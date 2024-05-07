import React, { useContext } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/NavState";
import { FormContext } from "../../context/FormState";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const { navLinks,showNav, handleNav } = useContext(NavContext);
  const { handleForms } = useContext(FormContext);
  return (
    <nav className="flex justify-between items-center gap-10">
      <button onClick={handleNav} className="text-3xl sm:hidden">
        <CgMenuRight />
      </button>
      <div className={`${showNav?"":"left-[80rem]"} duration-700  transition-all absolute bg-white top-0 h-screen w-full left-0 sm:h-auto sm:static sm:flex justify-start items-center flex-col sm:flex-row sm:items-center gap-4 sm:gap-10`}>
        <button onClick={handleNav} className="absolute top-6 right-4 text-3xl sm:hidden">
          <IoClose />
        </button>
        <div className="flex-col p-6 sm:p-0 sm:m-0 items-center w-full sm:w-auto text-xl mt-10 sm:text-sm md:text-lg justify-start sm:flex-row flex gap-2 sm:gap-6 font-semibold">
          {navLinks.map((links, index) => (
            <Link
            onClick={handleNav}
              to={links.path}
              key={index}
              className="w-full sm:w-auto sm:hover:underline border-b sm:border-none border-black p-4 sm:p-0 sm:hover:text-sky-400"
            >
              {links.link}
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex justify-center items-center gap-4 uppercase font-semibold text-xl sm:text-sm">
          <Link
            onClick={handleForms}
            className="p-2 hover:bg-green-500 rounded-lg hover:text-white border border-green-500 text-green-500"
          >
            Sign Up
          </Link>
          <Link
            onClick={handleForms}
            className="py-2 px-4 hover:bg-blue-600 rounded-lg hover:text-white border border-blue-600 text-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
