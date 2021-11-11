import React from "react";

//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FAQSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  // using <> is called a fraction which lets us put components on the page without the use of a separate div
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
