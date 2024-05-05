import React, { useContext } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/NavState";
import { FormContext } from "../../context/FormState";

const Nav = () => {
  const { navLinks } = useContext(NavContext);
  const { handleForms } = useContext(FormContext);
  return (
    <nav className="flex justify-between items-center gap-10">
      <button className="text-3xl sm:hidden">
        <CgMenuRight />
      </button>
      <div className="hidden sm:flex gap-6 font-semibold">
        {navLinks.map((links, index) => (
          <Link
            to={links.path}
            key={index}
            className="hover:underline hover:text-sky-400"
          >
            {links.link}
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex justify-center items-center gap-4 uppercase font-semibold text-sm">
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
    </nav>
  );
};

export default Nav;
