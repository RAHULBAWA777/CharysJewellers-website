import React from 'react';
import './newin.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import newInImg1  from '../../assets/newIn slider display/001.jpg'
import newInImg2  from '../../assets/newIn slider display/br002.jpg'
import newInImg3  from '../../assets/newIn slider display/c004.jpg'
import newInImg4  from '../../assets/newIn slider display/img3.jpeg'
import newInImg5  from '../../assets/newIn slider display/img4.jpeg'
import newInImg6  from '../../assets/newIn slider display/img6.jpeg'
import newInImg7  from '../../assets/newIn slider display/pe003.jpg'
import newInImg8  from '../../assets/newIn slider display/001.jpg'


const NewIn = () => {
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
    return (
        <>
            <div className="newIn-container outline">
                <div className="newIn-heading-container">
                    <h1 className="caption-heading">Shop All New</h1>
                    <br />
                    <button className='black-button outline '>SHOP NOW</button>
                </div>
                <div className="slider-container">

                  
                    <Slider {...settings}>
                        <div className ="newin-display-container">
                            <div className="newin-img">
                            <img src={newInImg1} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg2} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg3} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg4} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg5} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg6} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg7} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                        <div className ="newin-display-container">
                        <div className="newin-img">
                            <img src={newInImg8} alt="pic displays"  />
                            </div>
                            <div className="newin-caption">
                                info
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default NewIn