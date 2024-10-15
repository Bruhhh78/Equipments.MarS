import React from 'react'
import './Establishment.css'
function Establishment() {
  return (
    <section className='establishment-section'>
        <div className="establishment-heading">
            <h2>About The Company</h2>
        </div>
        <div className="establishment-container">
            <div className="year-of-establishment">
                <img src="https://img.icons8.com/000000/building" alt="" />
                <h3>Year Of Establishment</h3>
                <h3>2016</h3>
            </div>
            <div className="location">
            <img src="https://img.icons8.com/000000/map" alt="" />
                <p>M/s Mars Health Care</p>
                <p>Aliganj, Lucknow, Uttar Pradesh</p>
            </div>
        </div>
    </section>
  )
}

export default Establishment