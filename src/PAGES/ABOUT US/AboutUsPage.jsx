import React from 'react'
import styled from 'styled-components'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import AboutUs from '../../COMPONENTS/ABOUT US COMPONENTS/ABOUT US/AboutUs'
import CjPolicy from '../../COMPONENTS/ABOUT US COMPONENTS/CJ POLICY/CjPolicy'

const AboutUsPage = () => {
  return (
    <>
    
        <Header/>
        <AboutUs/>
        <CjPolicy/>
        <Footer/>
    </>
  )
}

export default AboutUsPage