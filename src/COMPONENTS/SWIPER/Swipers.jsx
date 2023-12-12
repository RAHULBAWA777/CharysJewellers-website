import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import styled from 'styled-components';

const Swipers = () => {
  return (
    <>
      <SwiperMainContainer>
        <Swiper
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect={'creative'}
          modules={[Autoplay, Pagination]}
          className="mySwiper5"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>

        </Swiper>
      </SwiperMainContainer>
    </>
  )
}


const SwiperMainContainer = styled.div`
  .swiper {
    z-index: 2;
    width: 100%;
    height: 100vh;
    margin-top: 7rem;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    z-index: 2;
    height: 100vh;
    width: 100%;
}

.swiper-slide:nth-child(1n) {
    background-image: url(../../../src/assets/slideimages/1.jpg);
    background-repeat: no-repeat;
    background-size: contain;
}

.swiper-slide:nth-child(2n) {
    background-image: url(../../../src/assets/slideimages/11.jpg);
    background-repeat: no-repeat;
    background-size: contain;
}

.swiper-slide:nth-child(3n) {
    background-image: url(../../../src/assets/slideimages/heki.jpeg);
    background-repeat: no-repeat;
    background-size: contain;
}

.swiper-slide:nth-child(4n) {
    background-image: url(../../../src/assets/slideimages/hek.jpeg);
    background-repeat: no-repeat;
    background-size: contain;
}

.swiper-slide:nth-child(5n) {
    background-image: url(../../../src/assets/slideimages/3.jpg);
    background-repeat: no-repeat;
    background-size: contain;
}


/* ######################################################### */

@media only screen and (max-width: 1024px) {
    .swiper {
        z-index: 2;
        width: 100%;
        /* height: 100vh; */
    }

    .swiper-slide:nth-child(n) {
        background-size: contain;
        z-index: 2;
    }
}

@media only screen and (max-width: 600px) {
    .swiper {
        z-index: 2;
        width: 100%;
        height: 25vh;
    }

    .swiper-slide {
        height: 25vh;
    }

    .swiper-slide:nth-child(n) {
        background-size: contain;
        z-index: 2;
    }
}
`
export default Swipers