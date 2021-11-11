import React from 'react';

//Styled Components

import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';

//Framer Motion
import{AnimateSharedLayout} from "framer-motion";


const FaqSection = () => {

    return(
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title= 'How Do I Start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, amet.</p>
                </div>
            </Toggle>
            <Toggle title = 'What Is Your Daily Schedule?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, amet.</p>
                </div>
            </Toggle>
            <Toggle title = 'What Payment Methods Do You Accept??'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, amet.</p>
                </div>
            </Toggle>
            <Toggle title="What Products Do You Offer?"  >
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, amet.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>

    )
};

//Styling

const Faq= styled(About) `

display: block;

span{
    display: block;

}

h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width:100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}

`;

export default FaqSection ;