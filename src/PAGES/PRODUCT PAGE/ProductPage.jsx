import React from 'react'
import ProductSkeleton from '../../COMPONENTS/SKELETONS/PRODUCT SKELETON/ProductSkeleton'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import styled from 'styled-components'




const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductSkeleton />
      <Footer />
    </>
  )
}


export default ProductPage





