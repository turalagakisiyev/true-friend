import React from 'react'
import "./WhiteDog.css"
import whitedog from "./Capture6.png"

const WhiteDog = () => {
    return (
        <div className='WhiteDog'>
            <div className="WhiteDog-Left">
                <h3>DOG TRAINING</h3>
                <h1>We use humane, natural, dog training methods</h1>
            </div>
            <div className="WhiteDog-Middle">
                <img src={whitedog} alt="whitedog" />
            </div>
            <div className="WhiteDog-Right">
                <p>Positive Dog Training is a rewards-based approach to teaching pet parents
                    how dogs think, learn and communicate. We focus on rewarding the behaviors
                    we like to encourage appropriate dog behavior in the real world.</p>
                <div className="WhiteDog-Right-Icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default WhiteDog