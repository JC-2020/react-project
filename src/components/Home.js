import React, { useState } from 'react';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import redTshirt from '../images/redtshirt.jpg';
import blueTshirt from '../images/bluetshirt.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    
    return(
        <div className="container">

            <div className="image">
            <div className="imagecontainer">
                <img src={greyTshirt} alt="Grey Tshirt" /></div>
                <h3>Grey Tshirt</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('greyTshirt')} className="addToCart cart1">Add to Cart </a>
            </div>
            <div className="image">
                <div className="imagecontainer">
                <img src={blackTshirt} alt="Black Tshirt" /></div>
                <h3>Black Tshirt</h3>
                <h3>$20.00</h3>
                <a onClick={() => props.addBasket('blackTshirt')} className="addToCart cart2">Add to Cart</a>
            </div>

            <div className="image">
            <div className="imagecontainer">
                <img src={blueTshirt} alt="Blue Tshirt" /></div>
                <h3>Blue Tshirt</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('blueTshirt')} className="addToCart cart3">Add to Cart</a>
            </div>
            <div className="image">
            <div className="imagecontainer">
                <img src={redTshirt} alt="Red Tshirt" /></div>
                <h3>Red Tshirt</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('redTshirt')} className="addToCart cart4">Add to Cart</a>
            </div>
        </div>
    );
}

export default connect(null, { addBasket })(Home);