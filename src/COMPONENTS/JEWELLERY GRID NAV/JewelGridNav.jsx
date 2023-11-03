import React from 'react'
import './jewelgridnav.css'
import d from '../../assets/raw img/diamondring.jpeg'
import g from '../../assets/raw img/gold.jpeg'
import p from '../../assets/raw img/bangles.jpeg'
import t from '../../assets/raw img/traditional.jpeg'
import c from '../../assets/raw img/mangalsutra.jpeg'
import cd from '../../assets/raw img/vchowker.jpeg'

const JewelGridNav = () => {
  return (
    <>
    <div className="jewel-grid-container outline">

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={d} alt=""/>
        </div>
        <div className="black-caption">
            <h6>Daimond</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={g} alt=""/>
        </div>
        <div className="black-caption">
        <h6>Gold</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={p} alt=""/>
        </div>
        <div className="black-caption">
        <h6>platinum</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={t} alt=""/>
        </div>
        <div className="black-caption">
        <h6>traditional</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={c} alt=""/>
        </div>
        <div className="black-caption">
        <h6>customise your design</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={cd} alt=""/>
        </div>
        <div className="black-caption">
        <h6>charys design</h6>
        </div>
    </div>
   
    </div>
    </>
  )
}

export default JewelGridNav