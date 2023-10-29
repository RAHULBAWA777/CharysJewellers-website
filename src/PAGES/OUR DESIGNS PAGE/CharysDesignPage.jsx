import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import dp1 from '../../assets/designs/d.jpg'
import dp2 from '../../assets/designs/diamond.jpeg'
import dp3 from '../../assets/designs/g.jpg'
import dp4 from '../../assets/designs/gold.jpeg'
import dp5 from '../../assets/designs/p.jpg'
import dp6 from '../../assets/designs/platinum.jpeg'
import dp7 from '../../assets/designs/t.jpg'
import dp8 from '../../assets/designs/traditional.jpeg'
import dp9 from '../../assets/design/img.jpeg'
import Header from '../../PAGES/HEADER/Header'
import Footer from '../../COMPONENTS/FOOTER/Footer'


const CharysDesignPage = () => {
    const images = [
        {
            original: dp1,
            thumbnail: dp1,
        },
        {
            original: dp2,
            thumbnail: dp2,
        },
        {
            original: dp3,
            thumbnail: dp3,
        },
        {
            original: dp4,
            thumbnail: dp4,
        },
        {
            original: dp5,
            thumbnail: dp5,
        },
        {
            original: dp6,
            thumbnail: dp6,
        },
        {
            original: dp7,
            thumbnail: dp7,
        },
        {
            original: dp8,
            thumbnail: dp8,
        },
        {
            original: dp9,
            thumbnail: dp9,
        },

    ];
    return (
        <>
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>
            <ImageGallery items={images} />
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </>
    )
}

export default CharysDesignPage