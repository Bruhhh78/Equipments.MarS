import React, { useState } from 'react';
import './Appointments.css';

function Appointments() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here

    };

    return (
        <section className='appointment-section'>
            <div className="appointment-container">
                <div className="appointment-form">
                    <form onSubmit={handleSubmit} className="form">
                    <h3>Appointment Form</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label><br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label><br />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label><br />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div> <br />
                        <button type="submit">Submit</button>
                    </form>
                    <h3>Reach out at admin@marshealthcare.in</h3>
                </div>
            </div>
        </section>
    );
}

export default Appointments;
