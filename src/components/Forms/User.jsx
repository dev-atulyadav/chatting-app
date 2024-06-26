import React, { useContext } from "react";
import Login from "./Login";
import { FormContext } from "../../context/FormState";
import Signup from "./Signup";

const User = () => {
  const { showForm } = useContext(FormContext);

  return (
    <article className="absolute h-full w-full p-4 flex justify-center items-center bg-[#00000049] backdrop-blur-[2px]">
      {(showForm === "Login" && <Login />) ||
        (showForm === "Sign Up" && <Signup />)}
    </article>
  );
};

export default User;
