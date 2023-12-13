import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'
import { Link } from "react-router-dom";
const BisHallMarkPage = () => {
    return (
        <>
            <Header />
            <CertificateWrapper>
                <div className="bg-image"></div>
                <SideNav>
                    <Link to="/cjpolicy" onClick={() => [window.scrollTo(0, 0)]}>CJ Policy</Link>
                    <br />
                    <Link to="/bishallmark" onClick={() => [window.scrollTo(0, 0)]}>BIS Hall Mark Gold</Link>
                    <br />
                    <Link to="/tested&certifieddiamonds" onClick={() => [window.scrollTo(0, 0)]}>Tested & Certified Diamonds</Link>
                    <br />
                    <Link to="/platinumpolicy" onClick={() => [window.scrollTo(0, 0)]}>About Platinum</Link>
                    <br />
                    <Link to="/buyback" onClick={() => [window.scrollTo(0, 0)]}>BuyBack Gaurantee</Link>
                    <br />
                    <Link to="/exchangepolicy" onClick={() => [window.scrollTo(0, 0)]}>Exchange Policy</Link>
                </SideNav>
                <CertificateContainer>
                    <div className="bg-text">
                        {/* <h2>Blurred Background</h2> */}
                        <h1 >BIS Hall Mark Jewellery</h1>
                        <br />
                        <br />
                        <h2>Now, here is the most important surety for you! Our gold is certified by the BIS hallmark as well! The Indian government has initiated the hallmark of the BIS mark on jewellery to ensure reliability and trust in the right quality and purity.There you go! Now you can rest assured, our gold, and diamonds, and all gems in between are all original and certified.</h2>
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
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 60%;
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
const SideNav = styled.div`
      position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  background-color: azure;
`
export default BisHallMarkPage