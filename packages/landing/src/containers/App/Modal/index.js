import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import ModalWrapper from "./Modal.style";
import "rc-tabs/assets/index.css";
import Button from "common/components/Button";
import { openModal, closeModal } from "@redq/reuse-modal";

const Modal = ({
  row,
  col,
  titleStyle,

  descriptionStyle,
  data,
}) => {
  return (
    <ModalWrapper>
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
        <Text content={data.description} {...descriptionStyle} />
      </div>
    </ModalWrapper>
  );
};

// LoginModal style props
Modal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
Modal.defaultProps = {
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

export default Modal;
