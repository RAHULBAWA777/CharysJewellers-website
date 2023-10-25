import React from 'react'
import styled from 'styled-components'
import JewelleryShowcaseSkeleton from '../../COMPONENTS/SKELETONS/JEWELLERY SHOWCASE/JewelleryShowcaseSkeleton'
import AllDaimondsData from '../../COMPONENTS/SKELETONS/JEWELLERY SHOWCASE/JEWELLERY SHOWASE DATA/AllDaimondsData'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
const AllDaimonds = () => {


  const createAllDaimonds = (data) => {
    return   <JewelleryShowcaseSkeleton jewelShowImg={data.jewelShowImg} jewelShowName={data.jewelShowName} Hallmarkpara={data.Hallmarkpara} key={data.id}/>
  }


  return (
    <>

    <Header/>
        <DaimondPagebgimg></DaimondPagebgimg>
  
        <DaimondPageMainContainer>
        {AllDaimondsData.map(createAllDaimonds)}
        </DaimondPageMainContainer>
        <Footer/>
    </>
  )
}







const DaimondPagebgimg = styled.div`
img{
  /* background-image: url(../); */
}
`
const DaimondPageMainContainer = styled.div`
/* background-color: blanchedalmond; */
padding: 3rem 1rem;
display: grid;
grid-template-columns:auto auto auto;
grid-gap: 1rem;


/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
grid-template-columns:auto auto;
grid-gap: 1rem;
 }

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
  grid-template-columns:auto ;
grid-gap: 1rem;
 }
`

export default AllDaimonds