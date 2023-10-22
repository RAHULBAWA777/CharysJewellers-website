import React from 'react'
import './sloganstrip.css'
import { Link } from "react-router-dom";
const SloganStrip = () => {
  return (
    <>
        <div className="sloganContainer outline">
            <h1 className="caption-heading2">
            Fine Jewellery <br/> For My Damn Self
            </h1>
            <br/>
            <Link className='caption-link' to="/aboutus">About Us</Link>
        </div>
    </>
  )
}

export default SloganStrip