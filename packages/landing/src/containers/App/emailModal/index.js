import React, { useState, useEffect, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import Heading from "common/components/Heading";
import EmailModalWrapper from "./emailModal.style";
//import "rc-tabs/assets/index.css";
import Button from "common/components/Button";
import { closeModal } from "@redq/reuse-modal";
import emailjs from "@emailjs/browser";
import Alert from "common/components/Alert";
import ReactDOM from "react-dom";
import { Message } from "firebase-functions/v1/pubsub";

import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import FormikController from "common/components/FormikController/formikcontroller";

const EmailModal = ({ titleStyle, data }) => {
  const form = useRef();

  const [isAlert, setIsAlert] = useState(false);
  const [closealert, setCloseAlert] = useState("block");

  const initialValues = {
    name: "",
    email: "",
    description: "",
    phone: "",
    price: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().required("Email is Required"),
    description: Yup.string().required("Description is Required"),
    phone: Yup.string().required("Phone is Required"),
    price: Yup.string().required("Price is Required"),
  });

  const choices = [
    { key: "Lite", value: 0 },
    { key: "Core", value: 79 },
    { key: "Essential", value: 220 },
  ];

  const sendEmail = (values, { resetForm }) => {
    let { name, email, description, phone, price } = values;
    let packages=choices.find(result=>result.value==price)
    
    values.packageName=packages.key
    values.packagePrice=packages.value
    if (
      name != "" &&
      email != "" &&
      description != "" &&
      phone != "" &&
      price != ""
    ) {

      emailjs
        .send(
          "service_916kgeh",
          "template_qpuyt9j",
          values,
          "hZ1YYOrtYv00jWfvl"
        )
        .then(
          (result) => {
            setIsAlert(true);
            setCloseAlert("block");
            resetForm({ values: "" });

            setTimeout(function () {
              setIsAlert(false);
              setCloseAlert("none");
            }, 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setIsAlert(false);
      resetForm({ values: "" });
    }
  };

  const closeAlert = () => {
    setCloseAlert("none");
    setIsAlert(false);
  };

  return (
    <EmailModalWrapper>
      <div className="conatiner">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Heading content={data.title} {...titleStyle} />
          <Button
            style={{
              color: "black",
            }}
            variant="fab"
            onClick={() => closeModal()}
            icon={
              <i
                className="flaticon-plus-symbol"
                style={{
                  transform: "rotate(45deg)",
                }}
              />
            }
          />
        </div>
        <div>
          <div style={{ display: closealert }}>
            {isAlert ? (
              <Alert className="alert" isMaterial={true}>
                <div>
                  <span className="closebtn" onClick={() => closeAlert()}>
                    &times;
                  </span>
                  Our team member contact you soon
                </div>
              </Alert>
            ) : (
              ""
            )}
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {(formik) => (
              <Form>
                <FormikController
                  control="input"
                  type="text"
                  label="Name"
                  name="name"
                />
                <FormikController
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikController
                  control="textArea"
                  label="Description"
                  name="description"
                />
                <FormikController
                  control="input"
                  label="Phone"
                  name="phone"
                  type="tel"
                />

                <FormikController
                  control="radio"
                  label="Price"
                  name="price"
                  options={choices}
                />

                <button type="submit" className="button">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </EmailModalWrapper>
  );
};

// LoginModal style props
EmailModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginEmailModal default style
EmailModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mt: "35px",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },

  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
  },
};

export default EmailModal;
