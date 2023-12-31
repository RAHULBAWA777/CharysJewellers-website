import React from 'react'
import styled from 'styled-components'

const HallmarkSkeleton = (props) => {
  return (
    <>
        <HallmarkContainer >
            <HallmarkImageContainer>
                <img src={props.hallmarkimage} alt="" />
            </HallmarkImageContainer>
            <HallmarkCaptionContainer>
                <h1>{props.Hallmarkcaption}</h1>
            </HallmarkCaptionContainer>
            <HallmarkParaContainer>
                <HallmarkPara>{props.Hallmarkpara}</HallmarkPara>
            </HallmarkParaContainer>
        </HallmarkContainer>
    </>
  )
}


const HallmarkContainer = styled.div`
/* background-color: #3e5a73; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 40%;
height: fit-content;
padding: 2rem;
/* margin: 2rem; */

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 padding: 1rem;
 width: 100%;

 }
 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {

 }
`
const HallmarkImageContainer=styled.div`
/* background-color: aqua; */
    width: 100%;
    height: 100%;
img{
    width: 100%;
    height: 20rem;
}
`

const HallmarkCaptionContainer=styled.div`
background-color: azure;
h1{
font-family: var(--font);
padding: 1rem;
}
`
const HallmarkParaContainer=styled.div`
/* background-color: brown; */
`
const HallmarkPara=styled.div`
font-family: var(--font-word);
font-size: 1.2rem;
font-style: italic;
`

export default HallmarkSkeleton