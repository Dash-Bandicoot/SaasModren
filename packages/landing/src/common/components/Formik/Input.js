import React from "react"
import { Field, ErrorMessage } from "formik"

function Input(props) {
  const { name, label, ...rest } = props
  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage  name={name} >{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage> 
      <br></br> 
    </div>
  )
}
export default Input