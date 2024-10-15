import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const marsLogo = '../Assets/mars-removebg-preview.png';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if(isOpen){
      console.log("Opened")
    }else{
      console.log("Closed")
    }
  };

  return (
    <section className="navbar-section">
      <h1 className="navbar-title">
        <a href="/">
          <img style={{ float: 'left', width: '250px', marginRight: '30px' }} src={marsLogo} alt="" />
        </a>
      </h1>

      {/* Desktop */}
      <ul className={`navbar-items ${isOpen ? 'mobile-nav' : ''}`}>
        <li>
          <a href="/" className="navbar-links">
            Home
          </a>
        </li>
        <li>
          <a href="/#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="/#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="/#clients" className="navbar-links">
            Clients
          </a>
        </li>
        <li>
          <a href="/appointment" className="navbar-links">
            Appointment
          </a>
        </li>
        <li>
          <a href="/#products" className="navbar-links">
            Products
          </a>
        </li>
      </ul>

      <div className='nav-btn' onClick={toggleMenu}>
        {
          !isOpen?<h1 className='bar'>=</h1>:<h1 className='cross'>X</h1>
        }
      </div>
    </section>
  );
}

export default Navigation;
