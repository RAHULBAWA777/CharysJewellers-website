import { React, useState } from 'react'
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
                        <ProductName><h1>Rose Diamond Ring <span>(size-28)</span> </h1></ProductName>
                        <DetailsTriggerSection>
                            <ProductStyleNo>CJXXXXX</ProductStyleNo>
                            <a href="#ProductDetailsSection"><ProductDetailTriggerbtn>View Details</ProductDetailTriggerbtn></a>
                        </DetailsTriggerSection>
                    </BasicDetails>

                    <hr />

                    <PriceSection>
                        <span>₹27,400</span>
                        <p>Instore Pickup Only</p>
                        <b><span className='spann'>Available in Stock</span></b>
                        <p style={{ color: '#213773' }}>(Rates may vary at the time of purchase)</p>
                    </PriceSection>
                    {/* $$$$$$$$$$$$$$$$$$$$$$$$$       AVAILABILITY        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
                    <AvailabilitySection>

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">

                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <AccorContainer>
                                            <AccorItem><b>Metal Color</b> <MetalColorContainer><MetalColor>White Gold</MetalColor> </MetalColorContainer>
                                                {/* <MetalColorContainer><MetalColor>Yellow Gold</MetalColor></MetalColorContainer>
                                                <MetalColorContainer><MetalColor>Rose Gold</MetalColor></MetalColorContainer> */}
                                                {/* <MetalColorContainer><MetalColor><MC3></MC3>Rose Gold</MetalColor></MetalColorContainer> */}
                                            </AccorItem>
                                            <br />
                                            <AccorItem><b>Metal Purity </b><MetalColorContainer><MetalColor>18K</MetalColor></MetalColorContainer> </AccorItem>
                                            <br />
                                            <AccorItem><b>Diamond Quality </b><MetalColorContainer><MetalColor><MC>💎</MC>VVS/EF</MetalColor></MetalColorContainer> </AccorItem>
                                            <br />
                                            {/* <AccorItem><b>Select Size</b><MetalColorContainer><MetalColor>
                                                <select class="form-select form-select-sm" aria-label="Small select example">

                                                    <option selected><b>Select Size</b></option>
                                                    <option value="1">1 </option>
                                                    <option value="2">2 </option>
                                                    <option value="3">3 </option>
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
                                            </MetalColor></MetalColorContainer> </AccorItem> */}

                                        </AccorContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </AvailabilitySection>
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
                    <br />

                    <a className="button-18" target="_blank" href="https://wa.me/918367322322?text=Hello + Charys Jewellers, + I + just + visited + your + website. + May + I + know + more + about + product + given + below?"><span className='text'>Order Now</span></a>

                    <br />
                    <br />
                    {/*                                                     CUSTOMISATION SECTION                                                     */}
                    <CustomisationSection>

                        <div className="accordion" >
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseAvail" aria-expanded="true" aria-controls="panelsStayOpen-collapseAvail">
                                        Order By Your Size
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseAvail" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <AccorContainer>
                                            {/* <AccorItem><b>Gold Color</b> <MetalColorContainer><MetalColor>White Gold</MetalColor> </MetalColorContainer>
                                                <MetalColorContainer><MetalColor>Yellow Gold</MetalColor></MetalColorContainer>
                                                <MetalColorContainer><MetalColor>Rose Gold</MetalColor></MetalColorContainer>
                                                <MetalColorContainer><MetalColor><MC3></MC3>Rose Gold</MetalColor></MetalColorContainer>
                                            </AccorItem> */}
                                            <AccorItem><b>Gold Color</b><MetalColorContainer><MetalColor>
                                                <select class="form-select form-select-sm" aria-label="Small select example">
                                                    <option selected><b>Select Color</b></option>
                                                    <option value="1">Yellow Gold </option>
                                                    <option value="2">Rose Gold </option>
                                                    <option value="3">White Gold </option>
                                                    {/* <option value="4">4</option> */}
                                                </select>
                                            </MetalColor></MetalColorContainer> </AccorItem>
                                            {/* <br />
                                            <AccorItem><b>Metal Purity </b><MetalColorContainer><MetalColor>18K</MetalColor></MetalColorContainer> </AccorItem>
                                            <br />
                                            <AccorItem><b>Diamond Quality </b><MetalColorContainer><MetalColor><MC>💎</MC>VVS/EF</MetalColor></MetalColorContainer> </AccorItem> */}
                                            <br />
                                            <AccorItem><b>Select Your Size</b><MetalColorContainer><MetalColor>
                                                <select class="form-select form-select-sm" aria-label="Small select example">

                                                    <option selected><b>Select Size</b></option>
                                                    <option value="1">1 </option>
                                                    <option value="2">2 </option>
                                                    <option value="3">3 </option>
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
                                            </MetalColor></MetalColorContainer> </AccorItem>

                                        </AccorContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </CustomisationSection>



                </ProductSkeletonSectionRight >

            </ProductSkeletonMainContainer>




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
            {/* ###################################################################################     product details accor 3    ############################################# */}

            <ProductDetailsSection id='ProductDetailsSection'>
                <h1 className="caption-heading">
                    Product Details
                </h1>
                <ProductDetailsAccorContainer>

                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                    <b>PRICE BREAKUP</b>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <AccorContainer1>
                                        <div className="accor-items">
                                            <div className="accor-item">Metal Price</div>
                                            <div className="accor-item">₹7,979</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Diamond Price</div>
                                            <div className="accor-item">₹X,XXX</div>
                                        </div>
                                        {/* <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Making Charges</div>
                                            <div className="accor-item">₹X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">GST(3%)</div>
                                            <div className="accor-item">₹X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Grand total</div>
                                            <div className="accor-item">₹X,XXX</div>
                                        </div> */}
                                    </AccorContainer1>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    <b>METAL DETAILS</b>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <AccorContainer1>
                                        <div className="accor-items">
                                            <div className="accor-item">Metal Purity</div>
                                            <div className="accor-item">pure</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Metal Weight</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Metal Cast</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Metal Rate</div>
                                            <div className="accor-item">₹X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">HUID No.(Hall Mark)</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                    </AccorContainer1>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    <b>DIAMOND DETAILS</b>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <AccorContainer1>
                                        <div className="accor-items">
                                            <div className="accor-item"> Clarity</div>
                                            <div className="accor-item">clear</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item"> Color</div>
                                            <div className="accor-item">Blue</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item"> Weight</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item"> Pieces</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Certificate No.</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Price</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                    </AccorContainer1>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    <b>OTHER STONE</b>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <AccorContainer1>
                                        <div className="accor-items">
                                            <div className="accor-item">Stone Name</div>
                                            <div className="accor-item">xxxx</div>
                                        </div>
                                        {/* <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Stone Color</div>
                                            <div className="accor-item">Blue</div>
                                        </div> */}
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Stone Weight</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Stone Pieces</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        {/* <div className="accor-items">
                                            <div className="accor-item">Certificate No.</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div> */}
                                        <div className="accor-items">
                                            <div className="accor-item">Price</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                    </AccorContainer1>
                                </div>
                            </div>
                        </div>
                    </div>

                </ProductDetailsAccorContainer>
            </ProductDetailsSection>
        </>
    )
}




const ProductSkeletonMainContainer = styled.div`
/* background-color: red; */
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
padding: 2rem;
margin-top: 5rem;

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 flex-direction: column;
 }

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {

 }
`
const ProductSkeletonSectionLeft = styled.div`
width: 45%;
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
width: 100%;
 }

`
const ProductSkeletonSectionRight = styled.div`
width: 45%;
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
const DetailsTriggerSection = styled.div`
/* background-color: blue; */
display: flex;
align-items: center;
justify-content: space-around;
padding: .5rem;
text-decoration: underline;
`
const ProductStyleNo = styled.div``
const ProductDetailTriggerbtn = styled.div``

const PriceSection = styled.div`
span{
    font-size: 2rem;
    color: orangered;
}
.spann{
    color: green;
    font-size: 1rem;
}
`
const AvailabilitySection = styled.div``
const CustomisationSection = styled.div`
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 /* background-color: antiquewhite; */
 }

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {

 }
`
const AccorContainer = styled.div`
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
    
/* background-color: #9b9a98; */
 }

`
const AccorItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

/* background-color: aquamarine; */

/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 flex-direction: column;
 }

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {

 }
`
const MetalColorContainer = styled.div`
display: flex;
margin: 0 1rem;
padding: .5rem .5rem;
border: 1px solid transparent;  
  

&:hover{
    border: 1px solid grey;    
    border-radius: 5px;
}
`
const MetalColor = styled.div`
display: flex;

`
const MC = styled.div`

`
const MC1 = styled.div`
width: 2rem;
height: 2rem;
border-radius: 100%;
background-color: #e7e5d8;
margin: 0 5px;
`
const MC2 = styled.div`
width: 2rem;
height: 2rem;
border-radius: 100%;
background-color: gold;
margin: 0 5px;
`
const MC3 = styled.div`
width: 2rem;
height: 2rem;
border-radius: 100%;
background-color:  pink;
margin: 0 5px;
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
/* background-color: aquamarine; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3rem;
`
const ProductDetailsAccorContainer = styled.div`
/* background-color: blueviolet; */
margin-top: 3rem;
width: 70%;
.accordion{
    .accordion-item{
        .accordion-header{
            .accordion-button{
                background-color: var(--color-bg);
                color: var(--color-theme);
            }
        }
    }
}

 /* ==========MEDIA QUERIES (small devices) ========= */
 @media screen and (max-width:600px) {
width: 100%;
}
`
const AccorContainer1 = styled.div`
/* background-color: brown; */

width: 100%;
.accor-items{
    /* background-color: #bd8b3f; */
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

}
.accor-item {
    /* background-color: #674c24; */

}
`




export default ProductSkeleton













