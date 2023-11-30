import styled from 'styled-components'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import yellowbar from "../../assets/yellow-bar.png"
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <TestimonialMainContainer>
                <h1 className='caption-heading'>Our Customer Stories</h1>
                <br />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >










                    <SwiperSlide>
                    <h4>Vallikiran, Hyderabad</h4>
                    <img src={yellowbar} alt="xx"/>
                    <br />
                    <h5> "The DIAMOND NECKLACE I bought from Charysjewellers are my go-to for adding a touch of elegance. They're lightweight, stylish, and I love the affordable prices at top quality."</h5>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h4> Madhavireddy, Hyderabad</h4>
                    <img src={yellowbar} alt="xx"/>
                    <br />
                    <h5>"The thing I like the most about Charys is that the rates are very reasonable where they don’t charge a lot of money in the name of making or wastage, also lot of option on the custom design " </h5>
                   
                    </SwiperSlide>

                    <SwiperSlide>
                        <h4>P.Bindu Hyderabad</h4>
                    <img src={yellowbar} alt="xx"/>
                    <br />
                    <h5> "The customer service at Charysjewellers is fantastic! They helped me find the perfect gift for my mom—a beautiful pendant that she hasn't taken off since." </h5>
                   
                    </SwiperSlide>

                    <SwiperSlide>
                        <h4>Anithareddy, Hyderabad</h4>
                    <img src={yellowbar} alt="xx"/>
                    <br />
                    <h5>"I'm so impressed with the price and design of my jewelry. Great value for money!"  </h5>
                   
                    </SwiperSlide>

                    <SwiperSlide>
                        <h4>California, (USA)</h4>
                    <img src={yellowbar} alt="xx"/>
                    <br />
                    <h5> "Craftmenship is excellent at charysjewellers, like as temple,naxi,kundan jewellery Aarthi " </h5>
                   
                    </SwiperSlide>

                    <SwiperSlide>
                        <h4>Haritha (atlanta,USA)</h4>
                    <img src={yellowbar} alt="xx"/>
                    <br />
                    <h5> "At charys jewellers each ORNAMENT telling a story of skill, passion, and enduring beauty. " </h5>
                   
                    </SwiperSlide>
                </Swiper>

            </TestimonialMainContainer>
        </>
    )
}


const TestimonialMainContainer = styled.div`
/* background-color: beige; */
padding: 2rem;
color: var(--color-theme);
height: 70vh;
font-family: var(--font2);

.swiper {
  width: 100%;
  height: 80%;
  /* background-color: aquamarine; */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--color-bg);
    padding: 2rem;
  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.swiper-slide >h4{
margin-top: 0rem;
}

.swiper-slide img {
  /* display: block; */
  /* width: 100%;
  height: 100%;
  object-fit: cover; */
}
`
export default Testimonial