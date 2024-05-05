import React, { createContext, useState } from 'react'

export const FormContext = createContext();
const FormState = ({children}) => {
    const [showForm, setShowForm] = useState("")
    const handleForms = (form) => {
        showForm==="" && setShowForm(form)
    }
  return (
    <FormContext.Provider value={{showForm,handleForms}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormState