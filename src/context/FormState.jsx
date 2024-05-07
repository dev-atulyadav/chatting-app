import React, { createContext, useContext, useState } from "react";
import { NavContext } from "./NavState";

export const FormContext = createContext();
const FormState = ({ children }) => {
  const { handleNav } = useContext(NavContext);
  const [showForm, setShowForm] = useState("");
  const handleForms = (e) => {
    let formType = e.target.textContent;
    console.log(formType);
    if (formType !== "") {
      handleNav();
      formType === "Sign Up" && setShowForm(formType);
      formType === "Login" && setShowForm(formType);
    }
    if (formType === "") {
      handleNav("");
      setShowForm(formType);
    }
  };
  return (
    <FormContext.Provider value={{ showForm, handleForms }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormState;
