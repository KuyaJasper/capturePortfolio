import React from "react";
import home1 from "../img/home1.png";

//styled components
import { About, Description, Image, Hide } from "../styles";

// framer motion
import { motion } from "framer-motion";

const AboutSection = () => {

// ORIGINAL PAGE ANIMATIONS FROM LESSION
//   const titleAnimation = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { duration: 2 } },
//   };

//   const container = {
//     hidden: { x: 100 },
//     show: {
//       x: 0,
//       transition: { duration: 0.5, ease: "easeOut", staggerChildren: 1, when:'afterChildren' },
//     },
//   };

  return (
    <About>
      <Description>
        <motion.div
        >
          <Hide>
            <motion.h2 >We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 >true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have!
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="man with a camera." />
      </Image>
    </About>
  );
};

export default AboutSection;
