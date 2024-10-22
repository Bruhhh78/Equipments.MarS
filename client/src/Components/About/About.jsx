import React from 'react'
import './About.css'
function About() {
    return (
        <section id='about' className='mission-section'>
            <div className="mission-heading">
                <h2>About Us</h2>
            </div>
            <div className="mission-container">
                <figure className='about-image'>
                    <img src="../Assets/download (1).jpg" alt="" />
                </figure>
                <div className="about-text">
                    <ul>
                        <li>We aspire to create healing environments that:</li>
                        <ul type='a'>
                            <li>Meet the highest standards of functionality and aesthetics.</li>
                            <li>Foster a compassionate and patient-centric approach to healthcare.</li>
                        </ul>
                        <li>We relentlessly pursue advancements in technulogy and design.</li>
                        <li>We aim to play a pivotal rule in shaping the future of healthcare infrastructure.</li>
                        <li>Every healthcare facility we touch reflects our commitment to excellence.</li>
                        <li>We contribute to the overall well-being of communities worldwide.</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default About