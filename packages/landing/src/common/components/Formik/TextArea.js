import React from "react"
import { Field, ErrorMessage } from "formik"

function TextArea(props) {
  const { label, name, ...rest } = props
  return (
    <div>
      
      <label htmlFor={name}>{label}</label>
      
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage  name={name} >{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
      <br></br>
    </div>
  )
}
export default TextArea