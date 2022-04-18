import React from "react"
import { Field, ErrorMessage } from "formik"

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage  name={name} >{msg => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
      <br></br>
    </div>
  )
}

export default Select