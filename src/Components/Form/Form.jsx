import React, { useState } from 'react';
import "./Form.css";
import littleDog from "./Capture8.jpg";
import litteCat from "./Capture9.png";


const Form = () => {

    const [first, setShowResults] = useState(() => true);
    const [input, setInput] = useState("");
    const [isActive, setActive] = useState(true);

    const onClick = () => {
        if (first === true) {
            setShowResults(false);
        } else {
            setShowResults(true);
        }
    };

    const checkInput = (event) => {
        setInput(event.target.value);
        if (event.target.value !== "") {
            setActive(false);
        } else {
            setActive(true);
        }
    };

    return (
        <div className='Form'>
            <div className="Form-Left">
                <img src={littleDog} alt="littleDog" />
            </div>
            <div className="Form-Right">
                {first ?
                    <div className="Form-Right-Input">
                        <h1>Need a Sweet Heart?</h1>
                        <p>Whether or not you plan on competing in dog sports and events,
                            it’s critical that all dogs receive basic training, from how to
                            walk well on leash to being comfortable with strangers.</p>

                        <label>
                            <input type="text" placeholder='Enter your Name' value={input} maxLength={32} onChange={checkInput} />
                            <button type='submit' onClick={onClick} disabled={isActive}>Submit</button>
                        </label>
                    </div>
                    : <div className="Form-Thanks">
                        <div className='Form-Thanks-333'>
                            Thank you for visiting my website
                            <b>{input}</b>
                        </div>
                        <div>
                            <img style={{ width: "200px", height: "auto" }} src={litteCat} alt="littleCAt" />
                        </div>
                        <div>
                            <i onClick={onClick} className="fa-solid fa-share"></i>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Form;
