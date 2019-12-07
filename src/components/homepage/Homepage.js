import React from 'react';
import Header from './Header';
import CardList from './CardList';
import Particles from 'react-particles-js'

import './homepage.css'
const particleDetails = {
    particles: {
        number: {
            value: 35,
            density: {
                enable: true,
                value_area: 400
            }
        }
    }
}

const Homepage = () => {
    return (
        <div className="w-100 bg-black-90">
            <Particles className="particles" params={particleDetails} />
            <Header />
            <div className="container">

                <CardList />
            </div>


        </div>
    )
}

export default Homepage;