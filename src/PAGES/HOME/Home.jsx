import React from 'react'
import Header from '../HEADER/Header';
import Swiper from '../../COMPONENTS/SWIPER/Swipers.jsx'
// import JewelGridNav from '../../COMPONENTS/JEWELLERY GRID NAV/JewelGridNav'
// import FillerShowcase from '../../COMPONENTS/FILLER-SHOWCASE/FillerShowcase'
import NewIn from '../../COMPONENTS/NEWIN/NewIn'
// import SloganStrip from '../../COMPONENTS/SLOGAN STRIP/SloganStrip.jsx'
// import FillerShowcase2 from '../../COMPONENTS/FILLER-SHOWCASE-2/FillerShowcase2'

import MarqueeStrip from '../../COMPONENTS/MARQUEE/MarqueeStrip'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import Testimonial from '../../COMPONENTS/TESTIMONIAL/Testimonial.jsx';
const Home = () => {
  return (
    <>
      <Header />
      <MarqueeStrip />
      <Swiper />
      {/* <JewelGridNav /> */}
      <NewIn />
      {/* <FillerShowcase /> */}
      {/* <SloganStrip /> */}
      <Testimonial/>
      {/* <FillerShowcase2 /> */}

      <Footer />
    </>
  )
}

export default Home;