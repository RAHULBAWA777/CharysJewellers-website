import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'

const BuyBackGauranteePage = () => {
    return (
        <>
            <Header />
            <CertificateWrapper>
                <div className="bg-image"></div>
                <CertificateContainer>
                    <div className="bg-text">
                        {/* <h2>Blurred Background</h2> */}
                        <h1 >BUY BACK GAURANTEE</h1>
                        <br />
                        <br />
                        <h2>At any point of time if you feel you need to change the jewellery collections, Please come to us...We assure you a GUARANTEED BUYBACK on all our Gold and Diamond jewellery sold with a maximum value to you. Our Era collections will also get you maximum value based on the invoice. We provide 100 % buy back on gold and 90% on Diamonds at the prevailing rate for exchange.</h2>
                    </div>
                </CertificateContainer>
            </CertificateWrapper>
            <Footer />
        </>
    )
}


const CertificateWrapper = styled.div`
height: 100vh;
width: 100%;
       .bg-image {
        height: 100vh;
        width: 100%;
  /* The image used */
  background-image: url("src/assets/cjpolicies/hallmark.jpeg");
  
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
`
const CertificateContainer = styled.div`


/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 3rem;
  text-align: center;
}
.bg-text{
    h1, h2{
        font-style: italic;
    }
}
 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
    .bg-text {
  width: 100%;
}
}
`
export default BuyBackGauranteePage