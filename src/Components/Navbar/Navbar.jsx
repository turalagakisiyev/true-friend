import React, { useState } from 'react';
import "./Navbar.css";
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "./logo2.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);

  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div className="Navbar">
      <div onClick={scrollToTop} className="Navbar-Logo">
        <img src={Logo} alt="logo" />
      </div>

      < div className='Navbar-MenuIcon'>
        <i onClick={toggleMenu} className="fa-solid fa-bars" style={{ display: menuVisible ? "none" : "block", }} ></i>
        <i onClick={toggleMenu} className="fa-solid fa-xmark" style={{ display: menuVisible ? "block" : "none", color: "red" }} ></i>
      </div>

      <div className="Navbar-Menu">
        <ul>
          <li><Link to="Boxes" spy={true} smooth={true} duration={500} >Cleaning Of Pets</Link></li>
          <li><Link to="BlackCat" spy={true} smooth={true} duration={500} >Tips For Life With Cats</Link></li>
          <li><Link to="Bear" spy={true} smooth={true} duration={500} >Rescue a Pet</Link></li>
          <li><Link to="WhiteDog" spy={true} smooth={true} duration={500} >Dog Training</Link></li>
          <li><Link to="BlackDog" spy={true} smooth={true} duration={500} >Services</Link></li>
        </ul>
      </div>

      <div className="Navbar-Menu-2" style={{ height: menuVisible ? "170px" : "0" }}>
        <ul>
          <li ><Link to="Boxes" spy={true} smooth={true} duration={500} >Cleaning Of Pets</Link></li>
          <li><Link to="BlackCat" spy={true} smooth={true} duration={500} >Tips For Life With Cats</Link></li>
          <li><Link to="Bear" spy={true} smooth={true} duration={500} >Rescue a Pet</Link></li>
          <li><Link to="WhiteDog" spy={true} smooth={true} duration={500} >Dog Training</Link></li>
          <li><Link to="BlackDog" spy={true} smooth={true} duration={500} >Services</Link></li>
        </ul>
      </div>

      <div style={{ marginRight: "20px" }}>
        <Link to="Form" spy={true} smooth={true} duration={1000} >
          <button className='Navbar-btn'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
