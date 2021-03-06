import React from "react";


//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation} className="Title"> Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us an Email <FontAwesomeIcon icon={faEnvelopeOpen} /></h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Add us on Social <FontAwesomeIcon icon={faMobileAlt} /></h2>
        </Social>
        </Hide>

      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media(max-width:1500px){
    padding:2rem;
    font-size:1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media(max-width:1500px){
    padding:2rem;
    font-size:1rem;
    margin-top:5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
