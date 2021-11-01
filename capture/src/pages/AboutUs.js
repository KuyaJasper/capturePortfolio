import React from 'react';

//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs= () => {
    // using <> is called a fraction which lets us put components on the page without the use of a separate div
    return(
    <>
<AboutSection/>
<ServicesSection/>
    </>)
};

export default AboutUs;