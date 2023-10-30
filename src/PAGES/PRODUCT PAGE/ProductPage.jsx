import React from 'react'
import ProductSkeleton from '../../COMPONENTS/SKELETONS/PRODUCT SKELETON/ProductSkeleton'
import Header from '../HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'

const ProductPage = () => {
  return (
    <div>
        <Header/>
        <ProductSkeleton/>
        <Footer/>
    </div>
  )
}

export default ProductPage