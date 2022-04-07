import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";
import Button from "common/components/Button";
import { openModal, closeModal } from "@redq/reuse-modal";
import getPage from "common/components/ContentFull/contentFull";

import LogoImage from "common/assets/image/saasModern/logo.png";
//import { FOOTER_WIDGET } from 'common/data/SaasModern';
import Modal from "containers/App/Modal";


const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  privacyContent,
  aboutContent,
  securityContent,
}) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const params = {
      content_type: "footerWidget",
    };
    let client = getPage();
    let result = await client.getEntries(params);
    console.log("Results");
    console.log(result);
    setData(result?.items.reverse() || []);

    //   setData(result.items)
  }, []);

  const handlePrivacyModal = (title) => {
    if (title == "Privacy Policy") {
      openModalFun(privacyContent);
    }
    if (title == "About Us") {
      openModalFun(aboutContent);
    }
    if (title == "Security Policy") {
      openModalFun(securityContent);
    }
  };

  const openModalFun = (data) => {
    openModal({
      config: {
        className: "login-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: Modal,
      componentProps: { data },
      // closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content="hello@redq.io" {...textStyle} />
            <Text content="+479-443-9334" {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {data.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.fields.title} {...titleStyle} />
                <List>
                  {widget.fields.menuItems?.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <Button
                        title={item}
                        className="ListItem"
                        variant="textButton"
                        onClick={() => handlePrivacyModal(item)}
                        //icon={<i className="flaticon-user" />}
                        aria-label="login"
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "23%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "77%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px",
  },
  // Default logo size
  logoStyle: {
    width: "130px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
