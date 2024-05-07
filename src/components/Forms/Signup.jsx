import React, { useContext } from 'react'
import { FormContext } from '../../context/FormState';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { handleForms } = useContext(FormContext);
  return (
    <div className="p-2 sm:p-4 felx justify-center items-center gap-4 flex-col bg-[#ffffff] backdrop-blur-[3px] rounded-xl border border-black">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">Sign Up</h2>
        <Link onClick={handleForms} className="text-lg">
          <MdOutlineCloseFullscreen />
        </Link>
      </div>
      <form className=" flex flex-col justify-center gap-4 p-2 sm:p-4">
        <div className="flex justify-between items-center gap-1 sm:gap-4 flex-wrap">
          <label htmlFor="email">Email</label>
          <input
            className="py-2 px-2 w-full sm:w-auto rounded-lg border border-black outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex justify-center items-start sm:items-center gap-1 sm:gap-4 flex-col sm:flex-row">
          <label htmlFor="password">Password</label>
          <input
            className="py-2 px-2 w-full sm:w-auto rounded-lg border border-black outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <button
          className="py-2 px-2 w-full sm:w-auto rounded-lg border border-black"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <span className="flex justify-center items-center text-center gap-1 m-2">
        <p>No a user?</p>
        <Link
          onClick={handleForms}
          className="hover:underline font-semibold hover:text-blue-600 "
        >
          Login
        </Link>
      </span>
    </div>
  );
}

export default Signup