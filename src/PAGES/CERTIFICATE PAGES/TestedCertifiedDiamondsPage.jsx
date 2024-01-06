import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'
import banner from '../../assets/bigLogo.png'
import { Link } from "react-router-dom";

const TestedCertifiedDiamondsPage = () => {
  return (
    <>
          <Header />
        
        <CertificateWrapper>
            <LeftSide>
                <div className="hallmarkSideNav">
                    OTHER POLICIES
                    <br />
                    <br />
                    <Link to="/cjpolicy" onClick={() => [window.scrollTo(0, 0)]}>CJ Policy</Link>
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
                    <h1>Tested & Certified Diamonds</h1>
                    <br />
                    <br />
                    <h5>Every diamond goes through 28 internal quality tests with IGI, GIA and SGL certification. Every diamond we use is free of any conflict. We follow ethics at every stage. From the beginning till the end. We at NIKAARA jewellers tie up with one of the world’s finest diamond producers for the highest quality, international lab certified and conflict free diamonds. We have a stringent and transparent system when it comes to quality. Our diamonds are approved for further use in jewellery only after passing their quality tests, ensuring every little detail and corner is real, natural and of the best quality for you. We assure you there are no Synthetic diamonds in our jewellery.</h5>
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

export default TestedCertifiedDiamondsPage