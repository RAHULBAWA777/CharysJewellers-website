import React from 'react'
import Banner from '../../COMPONENTS/BANNER/Banner'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import Swiper from '../../COMPONENTS/SWIPER/Swiper'
import JewelGridNav from '../../COMPONENTS/JEWELLERY GRID NAV/JewelGridNav'

const Header = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Swiper />
      <JewelGridNav/>
    </>
  )
}

export default Header