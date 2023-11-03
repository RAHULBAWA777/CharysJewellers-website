import React from 'react'
import ProductSkeleton from '../../COMPONENTS/SKELETONS/PRODUCT SKELETON/ProductSkeleton'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'
import c1 from '../../assets/brand-logo/gia.jpeg'
import c2 from '../../assets/brand-logo/hmp.jpeg'
import c3 from '../../assets/brand-logo/igi.jpeg'
import c4 from '../../assets/brand-logo/ssg-1.jpeg'
import c5 from '../../assets/cjpolicies/pt.jpeg'



const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductSkeleton />
      <BottomBanner>
        <div className="certificateWrapper">
          <span><small>certified by</small></span>
          <div className="cer">
            <img src={c1} />
            <img src={c2} />
            <img src={c3} />
            <img src={c4} />
            <img src={c5} />
          </div>
        </div>
        <div className="paymentCaption"><h4>Like What You See? Your Next Jewellery Is Just A Call Away.</h4></div>
        <a className="button-18" target="_blank" href="https://wa.me/918367322322?text=I'm%20interested%20in%20*CHARY%20JEWELLERS*"><span className='text'>Contact Us</span></a>
      </BottomBanner>
      <Footer />
    </>
  )
}

const BottomBanner = styled.div`
  background-color: var(--color-bg);
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

h4{
  font-style: italic;
}
.certificateWrapper{
  display: flex;
  /* gap: 1rem; */
  /* background-color: #bc881b; */
  margin: 0 1rem;
}
.cer, img{
  display: flex;
  margin: 0 5px;
  width: 3rem;
  height: 2rem;
}
 /* CSS */
.button-18 {
  touch-action: manipulation;
  display: inline-block;
  outline: none;
  font-family: inherit;
  font-size: 1em;
  box-sizing: border-box;
  border: none;
  border-radius: .3em;
  height: 2.75em;
  line-height: 2.5em;
  text-transform: uppercase;
  padding: 0 1em;
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(110,80,20,.4),
              inset 0 -2px 5px 1px rgba(139,66,8,1),
              inset 0 -1px 1px 3px rgba(250,227,133,1);
  background-image: linear-gradient(160deg, #a54e07, #b47e11, #fef1a2, #bc881b, #a54e07);
  border: 1px solid #a55d07;
  color: rgb(120,50,5);
  text-shadow: 0 2px 2px rgba(250, 227, 133, 1);
  cursor: pointer;
  transition: all .2s ease-in-out;
  background-size: 100% 100%;
  background-position:center;
}
.button-18:focus,
.button-18:hover {
  background-size: 150% 150%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23),
                inset 0 -2px 5px 1px #b17d10,
                inset 0 -1px 1px 3px rgba(250,227,133,1);
  border: 1px solid rgba(165,93,7,.6);
  color: rgba(120,50,5,.8);
}
.button-18:active {
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(110,80,20,.4),
              inset 0 -2px 5px 1px #b17d10,
                inset 0 -1px 1px 3px rgba(250,227,133,1);
}

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
 justify-content: space-between;
 padding: 0 .5rem;
.paymentCaption{
  display: none;
}

.certificateWrapper{
  display: flex;
  /* gap: 1rem; */
  /* background-color: #1bbc53; */
  margin: 0 .2rem;
}
.cer, img{
  display: flex;
  /* margin: 0 5px; */
  width: 1.5rem;
  height: 1.5rem;
}
}
`
export default ProductPage





