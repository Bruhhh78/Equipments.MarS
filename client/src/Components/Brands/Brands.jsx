import React from 'react'
import './Brands.css'
function Brands() {
  return (
    <section className='brands-section'>
        <div className="authorised-brands">
            <h2>Brands We Work With</h2>
        </div>
        <div className="brand-container">
            <figure className='brand-img '>
                <img src='../Assets/[removal.ai]_3750b048-6611-4712-9c18-9d09a40f6f0d-phoenix.png' alt="Pheonix" />
            </figure>
            <figure className='brand-img '>
                <img src='../Assets/Godrej-Interio-Logo-PNG.png' alt="godrej-interio" />
            </figure>
            <figure className='brand-img '>
                <img src='../Assets/philips logo.png' alt="philips" />
            </figure>
            <figure className='brand-img '>
                <img src='../Assets/masimo-logo.png' alt="philips" />
            </figure>
        </div>
    </section>
  )     
}

export default Brands