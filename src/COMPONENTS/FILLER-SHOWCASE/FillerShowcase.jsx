import React from 'react'
import './fillershowcase.css'
import { Link } from "react-router-dom";
// import sideImg from '../../assets/category/19.png'
import video from '../../assets/pexels-tima-miroshnichenko-6262804 (720p).mp4'
const FillerShowcase = () => {
  return (
    <>
      <div className="fillerShowcase-flex-container outline">

        <div className="fillerShowcase-item left outline">
          <iframe width="260" height="300" src="https://www.youtube.com/embed/4DRtNzyFSfk?si=zkRlRaStMgFn7qum" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <br/>
          <h1   className="caption-heading">Jewellery Crafted Just For You</h1>
          <br/>
          <p className="caption-info">A Divine Thread Of Love</p>
          <br/>
          <Link className='caption-link' to="/home">Home</Link>
        </div>

        <div className="fillerShowcase-item right outline"id='fillerPara'>
          {/* <img src={sideImg} alt="img"  /> */}
          <video width="100%" height="100%"  src={video} autoPlay muted loop/>
          <div className="image-caption">
          <p className="caption-heading2" >At any point of time if you feel you need to change the jewellery collections, Please come to us...We assure you a GUARANTEED BUYBACK on all our Gold and Diamond jewellery sold with a maximum value to you. Our Era collections will also get you maximum value based on the invoice. We provide 100 % buy back on  gold and 90% on Diamonds at the prevailing rate for exchange.</p>
          <br/>
          <Link className='caption-link' to="/aboutus">More About Us</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default FillerShowcase