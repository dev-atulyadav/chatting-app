import React, { createContext, useState } from "react";

export const FormContext = createContext();
const FormState = ({ children }) => {
  const [showForm, setShowForm] = useState("");
  const handleForms = (e) => {
    let formType = e.target.textContent;
    console.log(formType);
    formType === "Sign Up" && setShowForm(formType);
    (formType === "Login" || formType === "Get Started") &&
      setShowForm("Login");

    formType === "" && setShowForm(formType);
  };
  return (
    <FormContext.Provider value={{ showForm, handleForms }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormState;
