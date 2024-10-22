import React from 'react'
import Hero from '../Components/Hero/Hero'
import Brands from '../Components/Brands/Brands'
import About from '../Components/About/About'
import Clients from '../Components/Clients/Clients'
import Establishment from '../Components/Establishment/Establishment'
import Featured from '../Components/Featured/Featured'
import Missions from '../Components/Missions/Missions'

function Homepage() {
    return (
        <>
            <Hero />
            <Brands />
            <Missions />
            <About />
            <Clients />
            <Establishment />
            <Featured />
        </>

    )
}

export default Homepage