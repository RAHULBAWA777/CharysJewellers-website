import React from 'react'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'
import banner from '../../assets/bigLogo.png'
import { Link } from "react-router-dom";
import CjPolicy from '../../COMPONENTS/ABOUT US COMPONENTS/CJ POLICY/CjPolicy'
import BisHall from '../../COMPONENTS/ABOUT US COMPONENTS/BIS HALL MARKED/BisHall'

const CJPolicyPageFooter = () => {
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
                    {/* ################################################################################################################### */}
                    <div className="policyContent">
                        {/* <h1>BIS Hall Mark Jewellery</h1>
                    <br />
                    <br />
                    <h5>Now, here is the most important surety for you! Our gold is certified by the BIS hallmark as well! The Indian government has initiated the hallmark of the BIS mark on jewellery to ensure reliability and trust in the right quality and purity.There you go! Now you can rest assured, our gold, and diamonds, and all gems in between are all original and certified.</h5> */}

                        <CjPolicy />
                        <BisHall />

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
overflow-y: scroll;
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

export default CJPolicyPageFooter