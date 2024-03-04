import React from 'react'
import "./BlackDog.css"
import blackdog from "./Capture7.png"

const BlackDog = () => {
  return (
    <div className='BlackDog'>
      <div className="BlackDog-Left">
        <div className="BlackDog-Left-Text">
          <h1>Basic Dog</h1>
          <h3>TRAINING</h3>
          <p>Whether or not you plan on competing in dog sports and events, it’s
            critical that all dogs receive basic training, from how to walk well
            on leash to being comfortable with strangers.</p>
          <button>ALL SERVICES</button></div>
      </div>
      <div className="BlackDog-Right">
        <img src={blackdog} alt="BlackDog" />
      </div>
    </div>
  )
}

export default BlackDog