import React from 'react'
import fotogirl from "./Capture4.png"
import fotobear from "./Capture5.png"
import "./Bear.css"

const Bear = () => {
    return (
        <div className='Bear'>
            <div className="Bear-Container">
                <div className="Bear-Container-Left">
                    <h3>VET CLINIC</h3>
                    <h1>Rescue a <b>Pet</b></h1>
                    <p>Since newly abandoned pups are competing with each other for human heartstrings,
                        evolution says they should be most adorable around six and 11 weeks.</p>
                </div>
                <div className="Bear-Container-Right">
                    <img src={fotogirl} alt="fotogirl" />
                    <img src={fotobear} alt="bear" />
                </div>
            </div>
        </div>
    )
}

export default Bear