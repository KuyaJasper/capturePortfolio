import React from 'react';
import home1 from '../img/home1.png';

//styled components
import styled from 'styled-components';

const AboutSection = () =>{
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have!</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="man with a camera." />
            </Image>
        </About>
    );
};

// Styling

const About = styled.div`
min-height: 90vh;
display: flex ;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;

const Description = styled.div`

flex: 1;
padding-right: 5rem;

h2{
    font-weight: lighter;
}

`

const Image = styled.div`

flex: 1;
overflow: hidden;
// over flow keeps everything within the div and doesn't let it bleed into other divs.

img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
//object fit keeps the dimensions and covers the picture in the container
}

`

const Hide = styled.div`
overflow: hidden;

`


export default AboutSection;