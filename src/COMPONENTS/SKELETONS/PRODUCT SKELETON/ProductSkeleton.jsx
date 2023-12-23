import { React} from 'react'
import styled from 'styled-components'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../COMPONENTS/NEWIN/newin.css'

import c1 from '../../../assets/brand-logo/gia.jpeg'
import c2 from '../../../assets/brand-logo/hmp.jpeg'
import c3 from '../../../assets/brand-logo/igi.jpeg'
import c4 from '../../../assets/brand-logo/ssg-1.jpeg'
import c5 from '../../../assets/cjpolicies/pt.jpeg'

import dp1 from '../../../assets/designs/d.jpg'
import dp2 from '../../../assets/designs/diamond.jpeg'
import dp3 from '../../../assets/designs/g.jpg'
import dp4 from '../../../assets/designs/gold.jpeg'

import newInImg1 from '../../../assets/raw img/diamondring.jpeg'
import newInImg2 from '../../../assets/raw img/necklace.jpg'
import newInImg3 from '../../../assets/raw img/bangles.jpeg'
import newInImg4 from '../../../assets/raw img/traditional.jpeg'
import newInImg5 from '../../../assets/raw img/mangalsutra.jpeg'
import newInImg6 from '../../../assets/raw img/vchowker.jpeg'
import newInImg7 from '../../../assets/raw img/gold.jpeg'
import newInImg8 from '../../../assets/raw img/trad2.jpeg'
import newInImg9 from '../../../assets/raw img/trad3.jpeg'

const ProductSkeleton = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const images = [
        {
            original: dp1,
            thumbnail: dp1,
        },
        {
            original: dp2,
            thumbnail: dp2,
        },
        {
            original: dp3,
            thumbnail: dp3,
        },
        {
            original: dp4,
            thumbnail: dp4,
        },


    ];


    return (
        <>
            <ProductSkeletonMainContainer>

                <ProductSkeletonSectionLeft>

                    <ImageGallery items={images} />

                </ProductSkeletonSectionLeft>

                {/* #################                 INTERSECTION                       ################### */}

                <ProductSkeletonSectionRight>

                    <BasicDetails>
                        <ProductName><h5>Charys Diamond Ring </h5></ProductName>
                        <br />
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
                    </BasicDetails>

                    <PriceSection>
                        <span>Instore Shopping Only</span>
                        <br />
                        <span style={{ color: 'maroon' }}><b>₹27,400</b></span>
                        <p >(inclusive of all taxes)</p>
                        <span className='spann'>Price may vary at the time of purchase</span>
                    </PriceSection>

                    {/* $$$$$$$$$$$$$$$$$$$$$$$$$       AVAILABILITY        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
                    <AvailabilitySection>
                        <div className="availableInfo">
                            <span>Size</span>
                            <span>28</span>

                        </div>
                        <div className="availableInfo">
                            <span>Gold Color</span>
                            <span>Rose Gold </span>

                        </div>
                        <div className="availableInfo">
                            <span>Daimond Quality</span>
                            <span>💎VVS/EF</span>
                        </div>

                    </AvailabilitySection>



                    {/* #####################################   PRICE BREAKUP  SECTION                                                     */}
                    <hr />
                    <small>Price Breakup</small>
                    <PriceBreakupSection>
                        <br />
                        <div className="priceBreakup">
                            <span>Gold</span>
                            <span>₹21464</span>
                        </div>
                        <div className="priceBreakup">
                            <span>Diamond</span>
                            <span>₹20456</span>
                        </div>
                        <div className="priceBreakup">
                            <span>Making</span>
                            <span>₹4789</span>
                        </div>
                        <div className="priceBreakup">
                            <span>GST 3%</span>
                            <span>₹1583.24</span>
                        </div>

                    </PriceBreakupSection>
                    <br />
                    {/* ############################################################      CUSTOMISATION SECTION          ############################################################### */}
                    <hr />
                    <small>Order for your size</small>
                    <CustomistaionSection>
                        <br />
                        <div className="custom">
                            <span>Gold Color</span>
                            <select className="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Select Color</option>
                                <option value="1">Yellow Gold </option>
                                <option value="2">Rose Gold </option>
                                <option value="3">White Gold </option>
                            </select>
                        </div>
                        <div className="custom">
                            <span>Your Ring Size</span>
                            <select className="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Select Size</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>

                            </select>
                        </div>

                    </CustomistaionSection>
                    <br />
                    <a className="button-18" target="_blank" href="https://wa.me/918367322322?text=Hello + Charys Jewellers, + I + just + visited + your + website. + May + I + know + more + about + product + given + below?"><span className='text'>Order Now</span></a>
                    <br />


                </ProductSkeletonSectionRight >

            </ProductSkeletonMainContainer>


            {/* ###################################################################################     product details accor 3    ############################################# */}

            <ProductDetailsSection>
                <h4 className="caption-heading"> Product Details</h4>
                <br />
                <div className="productDetailsMainContainer">
                    <div className="detailsContainer">
                        <h5>Metal Information</h5>
                        <div>
                            <div className='detailItem'>
                                <span>Gold Purity</span>
                                <span>18KT (500%)</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Gold Color</span>
                                <span>Rose Gold</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Gross Wt</span>
                                <span>9.300</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Net Wt</span>
                                <span>9.280</span>
                            </div>
                        </div>
                    </div>

                    <div className="detailsContainer">
                        <h5>Diamond Information</h5>
                        <div>
                            <div className='detailItem'>
                                <span>Diamond Clearity</span>
                                <span>VVS</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Diamond Color</span>
                                <span>EF</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Diamond Cut</span>
                                <span>Round Brilliant</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Diamond Weight (Carat)</span>
                                <span>1.230</span>
                            </div>
                            <hr />
                            <div className='detailItem'>
                                <span>Diamond Pieces</span>
                                <span>24</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductDetailsSection>

            {/* ###################################################################################     Slider    ############################################# */}

            <ProductPageSlider className='outline'>
                <div className="slider-container">
                    <h1 className="caption-heading">You May Also Like</h1>
                    <br />
                    <br />
                    <Slider {...settings}>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg1} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg2} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg3} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg4} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg5} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg6} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg7} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg8} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className="newin-display-container">
                            <div className="newin-img">
                                <img src={newInImg9} alt="pic displays" />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                    </Slider>
                </div>
            </ProductPageSlider>

        </>
    )
}




const ProductSkeletonMainContainer = styled.div`
/* background-color: red; */
display: flex;
align-items: flex-start;
justify-content: space-evenly;
width: 100%;
padding: 2rem;
margin-top: 7rem;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 flex-direction: column;
 }

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {

 }
`
const ProductSkeletonSectionLeft = styled.div`
width: 30%;
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
width: 100%;
 }

`
const ProductSkeletonSectionRight = styled.div`
width: 40%;
/* background-color: #a54e07; */
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
width: 100%;
 }
.certificateWrapper{
    /* background-color: #752020; */
    display: flex;
    align-items: center;
}
.cer{
    /* background-color: bisque; */
    img{
        width: 2rem;
    }
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
const BasicDetails = styled.div`
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 margin: 2rem 0;
 }

`
const ProductName = styled.div`
span{
    font-size: 1.5rem;
}
`
const PriceSection = styled.div`
.spann{
    color: green;
    font-size: 1rem;
}
`
const AvailabilitySection = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
/* background-color: #85b2da; */
.availableInfo{
display: flex;
flex-direction: column;
padding: 0 1rem;
}
`
const PriceBreakupSection = styled.div`
display: flex;
.priceBreakup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
}
`
const CustomistaionSection = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
.custom{
    padding: 0 1rem;
}
`
const ProductPageSlider = styled.div`
/* background-color: bisque; */
  width: 100%;
  padding: 2rem;
  .slider-container{
    margin-top: 1rem;
  }
`
const ProductDetailsSection = styled.div`
    padding: 3rem;
.productDetailsMainContainer{
    display: flex;
justify-content: space-around;
/* background-color: aquamarine; */
}

.detailsContainer{
    /* background-color: azure; */
    padding: 1rem;
width: 30%;
    .detailItem{
        /* background-color: #9c6868; */
        display: flex;
        justify-content: space-between;
    }
}

`


export default ProductSkeleton













