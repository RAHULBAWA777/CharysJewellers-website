import React from 'react'
import './fillershowcase.css'
import { Link } from "react-router-dom";
import sideImg from '../../assets/banners/b1.jpeg'
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


        <div className="fillerShowcase-item right outline">
          <img src={sideImg} alt="img"  />
          <div className="image-caption">
          <h1 className="caption-heading">Best Sellers</h1>
          <br/>
          <Link className='caption-link' to="/home">Home</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default FillerShowcase