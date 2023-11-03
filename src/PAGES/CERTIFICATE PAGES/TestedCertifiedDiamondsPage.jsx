import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'

const TestedCertifiedDiamondsPage = () => {
  return (
    <>
         <Header />
            <CertificateWrapper>
                <div className="bg-image"></div>
                <CertificateContainer>
                    <div className="bg-text">
                        {/* <h2>Blurred Background</h2> */}
                        <h1 >Tested & Certified Diamonds</h1>
                        <br />
                        <br />
                        <h2>Every diamond goes through 28 internal quality tests with IGI, GIA and SGL certification. Every diamond we use is free of any conflict. We follow ethics at every stage. From the beginning till the end. We at Charys jewellers tie up with one of the world’s finest diamond producers for the highest quality, international lab certified and conflict free diamonds. We have a stringent and transparent system when it comes to quality. Our diamonds are approved for further use in jewellery only after passing their quality tests, ensuring every little detail and corner is real, natural and of the best quality for you. We assure you there are no Synthetic diamonds in our jewellery.</h2>
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
  background-image: url("src/assets/cjpolicies/cgi.jpeg");
  
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
`
export default TestedCertifiedDiamondsPage