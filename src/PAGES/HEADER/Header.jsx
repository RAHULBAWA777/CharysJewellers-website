import React from 'react'
import Banner from '../../COMPONENTS/BANNER/Banner'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import Swiper from '../../COMPONENTS/SWIPER/Swiper'
import JewelGridNav from '../../COMPONENTS/JEWELLERY GRID NAV/JewelGridNav'
import FillerShowcase from '../../COMPONENTS/FILLER-SHOWCASE/FillerShowcase'
import NewIn from '../../COMPONENTS/NEWIN/NewIn'
import SloganStrip from '../../COMPONENTS/SLOGAN STRIP/SloganStrip.jsx'
import FillerShowcase2 from '../../COMPONENTS/FILLER-SHOWCASE-2/FillerShowcase2'
import MarqueeStrip from '../../COMPONENTS/MARQUEE/MarqueeStrip'
import Footer from '../../COMPONENTS/FOOTER/Footer'

const Header = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Swiper />
      <JewelGridNav/>
      <FillerShowcase/>
      <NewIn/>
      <SloganStrip/>
      <FillerShowcase2/>
      <MarqueeStrip/>
      <Footer/>
    </>
  )
}

export default Header