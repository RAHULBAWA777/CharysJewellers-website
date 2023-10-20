import React from 'react'
import './marquee-strip.css'
import Marquee from "react-fast-marquee";
const MarqueeStrip = () => {
    return (
        <>
            <Marquee className='marquee outline'>
                Gold &nbsp; &nbsp; &nbsp; &nbsp; Platinum &nbsp; &nbsp; &nbsp; &nbsp; Daimond
            </Marquee>
        </>
    )
}

export default MarqueeStrip