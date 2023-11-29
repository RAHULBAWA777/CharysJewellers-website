import React from 'react'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
// import AboutUs from '../../COMPONENTS/ABOUT US COMPONENTS/ABOUT US/AboutUs'
import CjPolicy from '../../COMPONENTS/ABOUT US COMPONENTS/CJ POLICY/CjPolicy'
import BisHall from '../../COMPONENTS/ABOUT US COMPONENTS/BIS HALL MARKED/BisHall'
// import CjPolicy from '../../COMPONENTS/ABOUT US COMPONENTS/CJ POLICY/CjPolicy'

const CjPolicyPage = () => {
  return (
    <>
      <Header />
      {/* <CjPolicy/> */}
      {/* <AboutUs /> */}
      <CjPolicy />
      <BisHall />
      <Footer />
    </>
  )
}

export default CjPolicyPage