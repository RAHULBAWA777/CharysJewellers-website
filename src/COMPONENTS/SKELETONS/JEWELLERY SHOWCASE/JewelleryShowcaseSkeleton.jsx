import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";



const JewelleryShowcaseSkeleton = (props) => {
  return (
    <>
      <JewelleryShowcaseContainer>
        <JewelleryShowcaseContainerItemImg><img src={props.jewelShowImg} alt="jewellery img" /></JewelleryShowcaseContainerItemImg>
        <JewelleryShowcaseContainerItemName><span>{props.jewelShowName}</span></JewelleryShowcaseContainerItemName>
        <JewelleryShowcaseContainerItemLink className='caption-link'><Link to={props.jewelItemLink}>Order Now</Link></JewelleryShowcaseContainerItemLink>
      </JewelleryShowcaseContainer>
    </>
  )
}


const JewelleryShowcaseContainer = styled.div`
/* background-color: aqua; */
width: 30rem;
height: 30rem;

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
    width: 100%;
 }
`
const JewelleryShowcaseContainerItemImg = styled.div`
background-color: #F4EAE0;
width: 100%;
height: 80%;
overflow: hidden;
img{
    width: 100%;
  height: 100%;
}

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
    height: 70%;
 }
`
const JewelleryShowcaseContainerItemName = styled.div`
/* background-color: #246060; */
padding: 1rem 0;
font-family: var(--font-caption);
font-size: 1.4rem;
`
const JewelleryShowcaseContainerItemLink = styled.div``
export default JewelleryShowcaseSkeleton