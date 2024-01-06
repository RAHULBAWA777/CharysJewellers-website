import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'
import banner from '../../assets/bigLogo.png'
import { Link } from "react-router-dom";

const ExchangePolicyPage = () => {
  return (
    <>
      <Header />
        
        <CertificateWrapper>
            <LeftSide>
                <div className="hallmarkSideNav">
                    OTHER POLICIES
                    <br />
                    <br />
                    <Link to="/cjpolicypage" onClick={()=>[window.scrollTo(0 ,0)] }>CJ Policy</Link>
<br />
                    <Link to="/bishallmark" onClick={() => [window.scrollTo(0, 0)]}>BIS Hall Mark Gold</Link>
                    <br />
                    <Link to="/tested&certifieddiamonds" onClick={() => [window.scrollTo(0, 0)]}>Tested & Certified Diamonds</Link>
                    <br />
                    <Link to="/platinumpolicy" onClick={() => [window.scrollTo(0, 0)]}>Platinum Policy</Link>
                    <br />
                    <Link to="/buyback" onClick={() => [window.scrollTo(0, 0)]}>BuyBack Gaurantee</Link>
                    <br />
                    <Link to="/exchangepolicy" onClick={() => [window.scrollTo(0, 0)]}>Exchange Policy</Link>
                </div>
            </LeftSide>

            <RightSide>
                <div className="policyBanner">
                    <img src={banner} alt="im" />
                </div>
                {/* @@@@@@@@@@@@@@@@@@@@@@@ */}
                <div className="policyContent">
                    <h1>Exchange Policy</h1>
                    <br />
                    <br />
<h5>Gold Jewellery is an appreciating asset. At charysjewellers, we are more than happy to exchange your gold at the prevailing rate with the 100% value of metal weight (applicable only on the jewellery purchased from nikaarajewellers will ensure you get to know the exact purity of your gold. We assure you this process will be transparent and trustworthy.</h5>  
              </div>
            </RightSide>
        </CertificateWrapper>

        <Footer />
    </>
)
}

const CertificateWrapper = styled.div`
/* background-color: red; */
width: 100%;
height: 100vh;
margin-top: 7rem;
display: flex;
font-family: var(--font);
`
const LeftSide = styled.div`
background-color: var(--color-theme);
width: 20%;
color: white;
font-size: 1.5rem;
a{
    color: gold;
    font-size: 1.2rem;
}
a:hover{
    color: white;
}
.hallmarkSideNav{
    padding: 2rem;
    line-height: 3rem;
}
`
const RightSide = styled.div`
/* background-color: #626236; */
width: 80%;

.policyBanner{
height: 20%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
/* background-color: #aaaa5c; */
img{
    width: 18rem;
    padding: 1rem;
    background-color: var(--color-theme);
}
}

.policyContent{
    padding: 2rem;
    h1{
        color: var(--color-theme);
        font-style: italic;
    }
}
`


export default ExchangePolicyPage