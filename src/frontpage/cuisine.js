import React, { Component } from 'react';
import '../style/cuisine.css';
import '../style/App.css';
import Footer from '../frontpage/Footer';
import HeaderMin from './HeaderMin';
import foodpic from '../assets/image.jpg';
import foodpic1 from '../assets/image1.jpg';
import foodpic2 from '../assets/image2.jpg';




export default class Stores extends React.Component {
    static propTypes = {};

    render () {
        return (
                <div>
                    <HeaderMin />

                    <div className="container">
                    <h1>San Francisco Restaurants</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="left" src={foodpic} alt="foodimage"/>
                            <h5>The Halal Food</h5>
                            <p>15-20 Mins</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="left" src={foodpic1} alt="foodimage"/>
                            <h5>The Halal Food</h5>
                            <p>15-20 Mins</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="left" src={foodpic2} alt="foodimage"/>
                            <h5>The Halal Food</h5>
                            <p>15-20 Mins</p>
                        </div>
                    </div>
                    </div>




            <Footer />
            </div>
        );
        
                
     }
}