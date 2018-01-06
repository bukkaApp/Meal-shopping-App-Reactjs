import React from 'react';
import '../style/foot.css';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Instagram from 'react-icons/lib/fa/instagram';
import {Link} from 'react-router-dom';
import ajx from '../util/ajax'

const Footer =()=> {

        return (
            <div className="footer">
                <div className="footer1 m-row">
                    <img    className="bukka2" 
                            src={ajx.logo} 
                            alt="bukka"/>
                </div>
                    <div className="row footer2 m-row">
                    <div className="col-sm-4">
                        <ul className="">
                            <li>
                                <a>
                                    <span className="red">
                                        #
                                    </span>
                                    <span className="red2">
                                        FoodIsReady
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/mybukka">
                                    <span className="facebook">
                                        <Facebook />
                                    </span>
                                </a>
                                <a href="https://www.twitter.com/mybukka">
                                    <span className="twitter">
                                        <Twitter />
                                    </span>
                                </a>
                                <a href="https://www.instagram.com/mybukka">
                                    <span className="instagram">
                                        <Instagram />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-sm-4">
                        <ul className="">
                            <li>
                                <a href="https://business.mybukka.com">
                                    Bukka for Business
                                </a>
                            </li>
                            <li>
                                <Link to="/event">
                                    Bukka for Events
                                </Link>
                            </li>
                            <li>
                                <a href="https://chef.mybukka.com">
                                    Become a Chef
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="">
                            <li><a >About Bukka</a></li>
                            <li><a >Contact</a></li>
                            <li><a >Help</a></li>
                            <li><a >FAQs</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="row footer3  m-row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-3">
                            <a >
                                <img    className="apple" 
                                        src={ajx.applelogo} 
                                        alt="applestore"/>
                            </a>
                        </div>
                        
                        <div className="col-sm-3">
                            <a >
                                <img    className="google " 
                                        src={ajx.googleplaylogo} 
                                        alt="googleplay"/>
                            </a>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                    <div className="row footer4 m-row ">
                        <div className="col-sm-4">
                        &copy; Copyright 2017 Warehouse Global Links
                        </div>
                        <div className="col-sm-4">
                            <a >Privacy</a>
                        </div>
                        <div className="col-sm-4">
                            <a >Terms</a>
                        </div>
                    </div>
            </div>

        ) 
    }

    export default Footer;