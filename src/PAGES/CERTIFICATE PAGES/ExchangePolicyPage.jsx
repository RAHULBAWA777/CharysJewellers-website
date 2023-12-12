import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'

const ExchangePolicyPage = () => {
  return (
    <>
        <Header />
        <CertificateWrapper>
            <div className="bg-image"></div>
            <CertificateContainer>
                <div className="bg-text">
                    {/* <h2>Blurred Background</h2> */}
                    <h1 >Exchange Policy</h1>
                    <br />
                    <br />
                    <h2>Gold Jewellery is an appreciating asset. At charysjewellers, we are more than happy to exchange your gold at the prevailing rate with the 100% value of metal weight (applicable only on the jewellery purchased from charysjewellers will ensure you get to know the exact purity of your gold. We assure you this process will be transparent and trustworthy.</h2>
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

export default ExchangePolicyPage