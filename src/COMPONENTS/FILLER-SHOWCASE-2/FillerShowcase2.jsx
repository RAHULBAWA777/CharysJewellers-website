import React from 'react'
import './fillershowcase2.css'
import { Link } from "react-router-dom";
import video from '../../assets/pexels-tima-miroshnichenko-6262804 (720p).mp4'
const FillerShowcase2 = () => {
  return (
    <>
      <div className="fillerShowcase-flex-container2 outline">

        <div className="fillerShowcase-item2 left2 outline">
          <video width="100%" height="100%"  src={video} autoPlay muted loop/>
            
             
            </div>


            <div className="fillerShowcase-item2 right2 outline">
              {/* <img src={sideImg} alt="img"  /> */}
              <div className="image-caption2">
                <h1 className="caption-heading">STORES & SERVICES</h1>
                <br />
                <p className="caption-info">Discover our thoughtfully designed stores</p>
                <br />
                <a target="_blank" href="https://www.google.com/maps/place/charys+jewellers/@17.3671412,78.5479019,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb990a6ee0767d:0x3b39b258c6c66d55!8m2!3d17.3671355!4d78.5479094!16s%2Fg%2F11j7j9_plm" className='caption-link'>Learn More</a>
              </div>
            </div>

        </div>
      </>
      )
}

      export default FillerShowcase2