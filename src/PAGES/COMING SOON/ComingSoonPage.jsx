import React from 'react'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'
import cs from '../../assets/cs.png'

const ComingSoonPage = () => {
  return (
    <>
    <Header/>
    <ComingSoonContainer>
    <img src={cs} alt="cs" />
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
    img{
      width: 30rem;
    }
`
export default ComingSoonPage