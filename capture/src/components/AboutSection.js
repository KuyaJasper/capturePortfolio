import React from "react";
import home1 from "../img/home1.png";

//styled components
import { About, Description, Image, Hide } from "../styles";

// framer motion
import { motion } from "framer-motion";
import { titleAnimation,fade, photoAnimation } from "../animation";

const AboutSection = () => {

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation} >We work</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
            to make your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have!
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants ={photoAnimation} src={home1} alt="man with a camera." />
      </Image>
    </About>
  );
};

export default AboutSection;
