import styled from "styled-components";

export const About = styled.div`
min-height: 90vh;
display: flex ;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;

export const Description = styled.div`

flex: 1;
padding-right: 5rem;
z-index: 2;

h2{
    font-weight: lighter;
}

`

export const Image = styled.div`

flex: 1;
overflow: hidden;
z-index: 2;
// over flow keeps everything within the div and doesn't let it bleed into other divs.

img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
//object fit keeps the dimensions and covers the picture in the container
}

`

export const Hide = styled.div`
overflow: hidden;

`;