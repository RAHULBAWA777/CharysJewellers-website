import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import dp1 from '../../assets/customiseyourdesign/1.jpeg'
import dp2 from '../../assets/customiseyourdesign/2.jpeg'
import dp3 from '../../assets/customiseyourdesign/3.jpeg'
import dp4 from '../../assets/customiseyourdesign/4.jpeg'
import dp5 from '../../assets/customiseyourdesign/5.jpeg'
import dp6 from '../../assets/customiseyourdesign/6.jpeg'
import dp7 from '../../assets/customiseyourdesign/7.jpeg'
import dp8 from '../../assets/customiseyourdesign/8.jpeg'
import dp9 from '../../assets/customiseyourdesign/9.jpeg'
import dp10 from '../../assets/customiseyourdesign/10.jpeg'
import dp11 from '../../assets/customiseyourdesign/11.jpeg'
import dp12 from '../../assets/customiseyourdesign/12.jpeg'
import dp13 from '../../assets/customiseyourdesign/13.jpeg'
import dp14 from '../../assets/customiseyourdesign/14.jpeg'
import dp15 from '../../assets/customiseyourdesign/15.jpeg'
import dp16 from '../../assets/customiseyourdesign/16.jpeg'
import dp17 from '../../assets/customiseyourdesign/17.jpeg'
import dp18 from '../../assets/customiseyourdesign/18.jpeg'
import dp19 from '../../assets/customiseyourdesign/19.jpeg'
import dp20 from '../../assets/customiseyourdesign/20.jpeg'
import dp21 from '../../assets/customiseyourdesign/21.jpeg'
import dp22 from '../../assets/customiseyourdesign/22.jpeg'
import dp23 from '../../assets/customiseyourdesign/23.jpeg'
import dp24 from '../../assets/customiseyourdesign/24.jpeg'
import dp25 from '../../assets/customiseyourdesign/25.jpeg'
import dp26 from '../../assets/customiseyourdesign/26.jpeg'
import dp27 from '../../assets/customiseyourdesign/27.jpeg'
import dp28 from '../../assets/customiseyourdesign/28.jpeg'
import dp29 from '../../assets/customiseyourdesign/29.jpeg'
import dp30 from '../../assets/customiseyourdesign/30.jpeg'
import dp31 from '../../assets/customiseyourdesign/31.jpeg'
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
        {
            original: dp10,
            thumbnail: dp10,
        },
        {
            original: dp11,
            thumbnail: dp11,
        },
        {
            original: dp12,
            thumbnail: dp12,
        },
        {
            original: dp13,
            thumbnail: dp13,
        },
        {
            original: dp14,
            thumbnail: dp14,
        },
        {
            original: dp15,
            thumbnail: dp15,
        },
        {
            original: dp16,
            thumbnail: dp16,
        },
        {
            original: dp17,
            thumbnail: dp17,
        },
        {
            original: dp18,
            thumbnail: dp18,
        },
        {
            original: dp19,
            thumbnail: dp19,
        },
        {
            original: dp20,
            thumbnail: dp20,
        },
        {
            original: dp21,
            thumbnail: dp21,
        },
        {
            original: dp22,
            thumbnail: dp22,
        },
        {
            original: dp23,
            thumbnail: dp23,
        },
        {
            original: dp24,
            thumbnail: dp24,
        },
        {
            original: dp25,
            thumbnail: dp25,
        },
        {
            original: dp26,
            thumbnail: dp26,
        },
        {
            original: dp27,
            thumbnail: dp27,
        },
        {
            original: dp28,
            thumbnail: dp28,
        },
        {
            original: dp29,
            thumbnail: dp29,
        },
        {
            original: dp30,
            thumbnail: dp30,
        },
        {
            original: dp31,
            thumbnail: dp31,
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