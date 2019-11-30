import React from 'react';
import Header from './Header';
import CardList from './CardList';

import './homepage.css'

const Homepage = () => {
    return (
        <div className="w-100 bg-black-90">
            <Header />
            <div className="container">
                <CardList />
            </div>


        </div>
    )
}

export default Homepage;