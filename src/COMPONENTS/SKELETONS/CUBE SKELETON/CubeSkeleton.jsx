import React from 'react'
import styled from 'styled-components'

const CubeSkeleton = (props) => {
  return (
    <>
        <CubeContainer>
            <CubeImageContainer>
                <img src={props.cubeImg} alt="" />
            </CubeImageContainer>
            <CubeCaption>
                <h1>{props.cubeCaption}</h1>
            </CubeCaption>
        </CubeContainer>
    </>
  )
}


const CubeContainer = styled.div`
/* background-color: #3e5a73; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:20%;
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
const CubeImageContainer=styled.div`
/* background-color: aqua; */
    width: 100%;
    /* height: 100%; */
img{
    width: 100%;
    height: 100%;
}
`

const CubeCaption=styled.div`
/* background-color: azure; */
h1{
font-family: var(--font-word);
font-size: 1.2rem;
padding: 1rem;
}
`

export default CubeSkeleton