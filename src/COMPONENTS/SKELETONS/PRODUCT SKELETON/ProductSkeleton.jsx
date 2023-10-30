import { React, useState } from 'react'
import styled from 'styled-components'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import {
//     Magnifier,
//     GlassMagnifier,
//     SideBySideMagnifier,
//     PictureInPictureMagnifier,
//     MOUSE_ACTIVATION,
//     TOUCH_ACTIVATION
// } from "react-image-magnifiers";

import dp1 from '../../../assets/designs/d.jpg'
import dp2 from '../../../assets/designs/diamond.jpeg'
import dp3 from '../../../assets/designs/g.jpg'
import dp4 from '../../../assets/designs/gold.jpeg'

const ProductSkeleton = () => {
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
                {/* <GlassMagnifier
                    imageSrc={dp1}
                    imageAlt="Example"
                    largeImageSrc="./large-image.jpg" // Optional
                /> */}
                <ProductSkeletonSectionLeft>

                    <ImageGallery items={images} />

                </ProductSkeletonSectionLeft>

                {/* #################                 INTERSECTION                       ################### */}

                <ProductSkeletonSectionRight>

                    <BasicDetails>
                        <ProductName>Rose Diamond Ring</ProductName>
                        <DetailsTriggerSection>
                            <ProductStyleNo>CJXXXXX</ProductStyleNo>
                            <ProductDetailTriggerbtn>View Details</ProductDetailTriggerbtn>
                        </DetailsTriggerSection>
                    </BasicDetails>

                    <hr />

                    <PriceSection>
                        <span>₹27,400</span>
                        <p>Instore Pickup Only</p>
                    </PriceSection>

                    <CustomistaionSection>

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Items Availability
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <AccorContainer>
                                            <AccorItem>Metal Color <MetalColorContainer><MetalColor><MC></MC></MetalColor></MetalColorContainer> </AccorItem>
                                            <AccorItem>Metal Purity <MetalColorContainer><MetalColor><MC></MC></MetalColor></MetalColorContainer> </AccorItem>
                                            <AccorItem>Diamond Quality <MetalColorContainer><MetalColor><MC></MC></MetalColor></MetalColorContainer> </AccorItem>
                                        </AccorContainer>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
                        </div>
                    </CustomistaionSection>

                </ProductSkeletonSectionRight >
            </ProductSkeletonMainContainer>

        </>
    )
}


const ProductSkeletonMainContainer = styled.div`
background-color: red;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
padding: 2rem;
`
const ProductSkeletonSectionLeft = styled.div`
width: 45%;
`
const ProductSkeletonSectionRight = styled.div`
width: 45%;
`
const BasicDetails = styled.div``
const ProductName = styled.div``
const DetailsTriggerSection = styled.div``
const ProductStyleNo = styled.div``
const ProductDetailTriggerbtn = styled.div``


const PriceSection = styled.div``
const CustomistaionSection = styled.div``


const AccorContainer = styled.div`
background-color: blanchedalmond;
`

const AccorItem = styled.div``
const MetalColorContainer = styled.div``
const MetalColor = styled.div``
const MC = styled.div``



export default ProductSkeleton