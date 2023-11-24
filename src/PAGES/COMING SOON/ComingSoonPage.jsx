import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'

const ComingSoonPage = () => {
  return (
    <>
    <Header/>
    <ComingSoonContainer>
    <h1>Coming soon</h1>
    </ComingSoonContainer>
    <Footer/>
    </>
  )
}

const ComingSoonContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default ComingSoonPage