import React from "react"
import Input from "../Formik/Input"
import TextArea from "../Formik/TextArea"
import Select from "../Formik/Select"
import RadioButtons from "../Formik/RadioButton"
import CheckBoxes from "../Formik/Checkbox"

function FormikController(props) {
  const { control, ...rest } = props
  switch (control) {
    case "input":
      return <Input {...rest} />
    case "textArea":
      return <TextArea {...rest} />
    case "select":
      return <Select {...rest} />
    case "radio":
      return <RadioButtons {...rest} />
    case "checkbox":
      return <CheckBoxes {...rest} />
    default:
      return null
  }
}
export default FormikController