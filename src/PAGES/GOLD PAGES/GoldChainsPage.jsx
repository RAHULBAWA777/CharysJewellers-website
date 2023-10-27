import React from 'react'
import styled from 'styled-components'
import JewelleryShowcaseSkeleton from '../../COMPONENTS/SKELETONS/JEWELLERY SHOWCASE/JewelleryShowcaseSkeleton'
import AllGoldsData from '../../COMPONENTS/SKELETONS/JEWELLERY SHOWCASE/JEWELLERY SHOWASE DATA/AllGoldsData'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'



const GoldChainsPage = () => {

  return (
    <>

      <Header />

      <GoldChainPageMainContainer>
      {AllGoldsData.map((data, index) => {
                    if (index>19 && index<26 ) {
                        return <JewelleryShowcaseSkeleton jewelShowImg={data.jewelShowImg} jewelShowName={data.jewelShowName} jewelItemLink={data.jewelItemLink} key={data.id} />
                    }
                })}
      </GoldChainPageMainContainer>
      <Footer />
    </>
  )
}




const GoldChainPageMainContainer = styled.div`
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

export default GoldChainsPage
