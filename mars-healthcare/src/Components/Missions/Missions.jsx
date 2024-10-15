import React from 'react'
import './Missions.css'
function Missions() {
    return (
        <section className='about-section'>
            <div className="about-header">
                <h2>Our Mission And Vision</h2>
            </div>
            <div className="about-container">
                <p>
                    Striving for a future where healthcare spaces are
                    at the forefront of innovation and efficiency. 
                    <span style={{ color: 'rgb(0, 132, 255)' }}> Mars</span><span style={{ color: 'orange' }}> Healthcare</span> envisions being the
                    preferred provider of integrated solutions
                    that combine Philips and Godrej Interio. We
                    aspire to create healing environments that not
                    only meet the highest standards of functionality
                    and aesthetics but also foster a compassionate
                    and patient-centric approach to healthcare.line
                    prescriptions, and offer quick refills whenever
                    you require them.
                </p>
            </div>
            <div className="about-card-heading">
                <h2>Why Choose Us</h2>
            </div>
            <div className="about-cards">
                <div className="about-card">
                    <h2>Medical Equipments</h2>
                    <p className='card-desc'>
                        The most effective and reliable medical products
                    </p>
                    <img src="https://img.icons8.com/ffffff/building" alt="" />
                </div>
                <div className="about-card">
                    <h2>Healthcare Furniture</h2>
                    <p className='card-desc'>
                        We ensure that our hospital furniture meets the highest standard of quality
                    </p>
                    <img src="https://img.icons8.com/ffffff/medal" alt="" />
                </div>
                <div className="about-card">
                    <h2>Hospital Setup</h2>
                    <p className='card-desc'>
                    Mars Health Care ensures that the hospital is equipped with state-of-the-art technology.
                    </p>
                    <img src="https://img.icons8.com/ffffff/hospital" alt="" srcset="" />

                </div>
            </div>
        </section>
    )
}

export default Missions