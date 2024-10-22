import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <section className='hero-section'>
            <div className="hero-container">
                <header className="hero-container-text">
                    <h1>MARS Healthcare</h1>
                    <h2>We work with the Best Brands that includes Philips, Godrej Interio and Pheonix to provide you with the best medical facilities, equipments and Lab setup for your Hospital</h2>
                    <button className='appointment-btn'>
                        <a href="/appointment">Book Appointment</a>
                    </button>
                </header>
                <figure className='doctor-group'>
                    <img src='../Assets/doctor-group.png' alt="" />
                </figure>
            </div>
        </section>
    )
}

export default Hero