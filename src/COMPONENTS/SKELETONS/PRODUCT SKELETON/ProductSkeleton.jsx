import { React, useState } from 'react'
import styled from 'styled-components'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../COMPONENTS/NEWIN/newin.css'


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
                        <ProductName><h1>Rose Diamond Ring (28)</h1></ProductName>
                        <DetailsTriggerSection>
                            <ProductStyleNo>CJXXXXX</ProductStyleNo>
                            <a href="#ProductDetailsSection"><ProductDetailTriggerbtn>View Details</ProductDetailTriggerbtn></a>
                        </DetailsTriggerSection>
                    </BasicDetails>

                    <hr />

                    <PriceSection>
                        <span>₹27,400</span>
                        <p>Instore Pickup Only</p>
                        <p style={{ color: '#213773' }}>(Rates may vary at the time of purchase)</p>
                    </PriceSection>

                    <CustomistaionSection>

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Customisation
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <AccorContainer>
                                            <AccorItem><b>Metal Color</b> <MetalColorContainer><MetalColor><MC1></MC1>White Gold</MetalColor> </MetalColorContainer>
                                                <MetalColorContainer><MetalColor><MC2></MC2>Yellow Gold</MetalColor></MetalColorContainer>
                                                <MetalColorContainer><MetalColor><MC3></MC3>Rose Gold</MetalColor></MetalColorContainer>
                                                {/* <MetalColorContainer><MetalColor><MC3></MC3>Rose Gold</MetalColor></MetalColorContainer> */}
                                            </AccorItem>
                                            <br />
                                            <AccorItem><b>Metal Purity </b><MetalColorContainer><MetalColor>18K</MetalColor></MetalColorContainer> </AccorItem>
                                            <br />
                                            <AccorItem><b>Diamond Quality </b><MetalColorContainer><MetalColor><MC>💎</MC>VVS/EF</MetalColor></MetalColorContainer> </AccorItem>
                                            <br />
                                            <AccorItem><b>Select Size</b><MetalColorContainer><MetalColor>
                                                <select class="form-select form-select-sm" aria-label="Small select example">

                                                    <option selected><b>Select Size</b></option>
                                                    <option value="1">22 (61.9mm)</option>
                                                    <option value="2">23 (62.8mm)</option>
                                                    <option value="3">24 (63.9mm)</option>
                                                    <option value="4">25( 64.7mm)</option>

                                                </select>
                                            </MetalColor></MetalColorContainer> </AccorItem>

                                        </AccorContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </CustomistaionSection>

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
                                            <div className="accor-item">Diamond Clarity</div>
                                            <div className="accor-item">clear</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Diamond Color</div>
                                            <div className="accor-item">Blue</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Diamond Weight</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Diamond Pieces</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Certificate No.</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
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
                                            <div className="accor-item">Stone Clarity</div>
                                            <div className="accor-item">clear</div>
                                        </div>
                                        <hr />
                                        <div className="accor-items">
                                            <div className="accor-item">Stone Color</div>
                                            <div className="accor-item">Blue</div>
                                        </div>
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
                                        <div className="accor-items">
                                            <div className="accor-item">Certificate No.</div>
                                            <div className="accor-item">X,XXX</div>
                                        </div>
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

`
const BasicDetails = styled.div`
/* ==========MEDIA QUERIES (medium devices) ========= */
@media screen and (max-width:1024px) {
 margin: 2rem 0;
 }

`
const ProductName = styled.div``
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
`
const CustomistaionSection = styled.div`
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
.accor-item{
    /* background-color: #674c24; */
    
}
`


export default ProductSkeleton













