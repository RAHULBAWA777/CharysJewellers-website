// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';

import './swiper.css';

// import required modules
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      
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
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        className="mySwiper5"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      
    </>
  );
}
