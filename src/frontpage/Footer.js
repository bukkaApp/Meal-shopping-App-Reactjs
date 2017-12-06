import React, { Component } from 'react';
import '../style/foot.css';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Instagram from 'react-icons/lib/fa/instagram';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
    static propTypes = {};

    render () {
        return (
            <div className="footer">
                <div className="footer1 m-row">
                    <img className="bukka2" src='http://res.cloudinary.com/www-mybukka-com/image/upload/v1505586721/logo-light_xnxon0.png' alt="bukka"/>
                </div>
                    <div className="row footer2 m-row">
                    <div className="col-sm-4">
                        <ul className="">
                            <li><a href="#"><span className="red">#</span><span className="red2">FoodIsReady</span></a></li>
                            <li><a href="www.facebook.com/mybukka"><span className="facebook"><Facebook /></span></a><a href="www.twitter.com/mybukka"><span className="twitter"><Twitter /></span></a><a href="#"><span className="instagram"><Instagram /></span></a></li>
                        </ul>
                    </div>
                    
                    <div className="col-sm-4">
                        <ul className="">
                            <li><a href="#">Bukka for Business</a></li>
                            <li><Link to="/event">Bukka for Events</Link></li>
                            <li><a href="#">Become a Chef</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="">
                            <li><a href="#">About Bukka</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="row footer3  m-row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-3">
                            <a href="#"><img className="apple" src='http://res.cloudinary.com/www-mybukka-com/image/upload/v1508504845/c4c51cdd9a95bdb0c488ff0a013c865c_smq7g5.png' alt="applestore"/></a>
                        </div>
                        
                        <div className="col-sm-3">
                            <a href="#"><img className="google " src='http://res.cloudinary.com/www-mybukka-com/image/upload/v1508342712/appstore_bkvsi2.png' alt="googleplay"/></a>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                    <div className="row footer4 m-row ">
                        <div className="col-sm-4">
                        &copy; Copyright 2017 Warehouse Global Links
                        </div>
                        <div className="col-sm-4">
                            <a href="#">Privacy</a>
                        </div>
                        <div className="col-sm-4">
                            <a href="#">Terms</a>
                        </div>
                    </div>
            </div>

        );

        
    }
}