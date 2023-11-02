import React from 'react'
import styled from 'styled-components'
import CubeSkeleton from '../../SKELETONS/CUBE SKELETON/CubeSkeleton'
import CubeSkeletonData from '../../SKELETONS/CUBE SKELETON/CubeSkeletonData'


const createpolicies = (data) => {
  return <CubeSkeleton cubeImg={data.cubeImg} cubeCaption={data.cubeCaption} key={data.id} />
}

const CjPolicy = () => {
  return (
    <>
      <CjPolicyContainer id='policyID' className='outline'>
        <CjPolicyHeading>Our Policies</CjPolicyHeading>
        <CjPolicyContainerFluid id='policies'>
          {CubeSkeletonData.map(createpolicies)}
        </CjPolicyContainerFluid>
      </CjPolicyContainer>
    </>
  )
}

const CjPolicyContainer = styled.div`
font-family: var(--font);
color: var(--color-theme);
/* background-color: #4079aa; */
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
const CjPolicyHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: 5rem;
  padding: 2rem;
/* ==========MEDIA QUERIES (small devices) ========= */
@media screen and (max-width:600px) {
font-size: 3rem;
}
`

const CjPolicyContainerFluid = styled.div`
/* background-color: blanchedalmond; */
width: 100%;
height: fit-content;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export default CjPolicy