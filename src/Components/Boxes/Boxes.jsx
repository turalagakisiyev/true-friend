import React from 'react'
import './Boxes.css'
import boxPhoto1 from "./Capture1.png"
import boxPhoto2 from "./Capture2.png"

const Boxes = () => {
  return (
    <div className='Boxes' id='Boxes'>

      <div className="box box1">
        <p>Clean It Right 'Round <b>The Pets</b></p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div className="box type2-box" >
        <i className="fa-regular fa-heart"></i>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="box">
        <img src={boxPhoto1} alt="boxPhoto1" />
      </div>

      <div className="box type2-box">
        <i className="fa-solid fa-dog"></i>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="box">
        <img src={boxPhoto2} alt="boxPhoto2" />
      </div>

      <div className="box type2-box">
        <i className="fa-solid fa-cat"></i>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

    </div>
  )
}

export default Boxes