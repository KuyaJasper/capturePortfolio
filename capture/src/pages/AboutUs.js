import React from 'react';

//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FAQSection';

const AboutUs= () => {
    // using <> is called a fraction which lets us put components on the page without the use of a separate div
    return(
    <>
<AboutSection/>
<ServicesSection/>
<FaqSection/>
    </>)
};

export default AboutUs;