import React from 'react'
import styled from 'styled-components'
import HallmarkSkeleton from '../../SKELETONS/HALLMARK SKELETONS/HallmarkSkeleton'
import HallmarkSkeletonData from '../../SKELETONS/HALLMARK SKELETONS/HallmarkSkeletonData'















    // THIS SECTION IS CAUSING LOWER SCROLL BAR TO SHOW UP FIX THIS LATER 




const createHallMarks = (data) => {
  return   <HallmarkSkeleton hallmarkimage={data.hallmarkimage} Hallmarkcaption={data.Hallmarkcaption} Hallmarkpara={data.Hallmarkpara} key={data.id}/>
}

const BisHall = () => {
  return (
    <>
      <BisHallContainer className='outline'>
        <BisHallHeading>Tested And Certified Gold & Daimonds</BisHallHeading>
        <br/>
        <br/>
        <BisHallContainerFluid>
          {HallmarkSkeletonData.map(createHallMarks)}
        </BisHallContainerFluid>
      </BisHallContainer>
    </>
  )
}

const BisHallContainer = styled.div`
/* background-color: blueviolet; */
width: 100%;
text-align: center;
padding: 2rem;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 padding: 0;
}

/* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
padding: 0;
}
`
const BisHallHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: 5rem;
  padding: 2rem;
/* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
font-size: 2.3rem;
}
`

const BisHallContainerFluid = styled.div`
/* background-color: blanchedalmond; */
width: 100%;
height: fit-content;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export default BisHall