import React from 'react'
import styled from 'styled-components'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import AboutUs from '../../COMPONENTS/ABOUT US COMPONENTS/ABOUT US/AboutUs'
import CjPolicy from '../../COMPONENTS/ABOUT US COMPONENTS/CJ POLICY/CjPolicy'
import BisHall from '../../COMPONENTS/ABOUT US COMPONENTS/BIS HALL MARKED/BisHall'

const AboutUsPage = () => {
  return (
    <>
    
        <Header/>
        <AboutUs/>
        <CjPolicy/>
        <BisHall/>
        <Footer/>
    </>
  )
}

export default AboutUsPage