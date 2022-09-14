import React from "react";
import "./bottom.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import last_in from './last.PNG';
import { Link } from "react-router-dom";
function Bottom(){
    return(
        <>
            <div className="container-fluid bottomspi">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth12" />
                            </div>
                        </div>
                        <div className="bottom_content">
                            <p >See personlized recommendations</p>
                            <button className="bottom_button">Sign in</button>
                            <p>New customer?<span className="Start_here">Start here</span></p>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <hr className="hrwidth12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back_to_top row">
                    <div className="bottom_content col-xl-12">
                        <p>Back to Top</p>
                    </div>
                </div>
                <div className="row Get_knows">
                    <div className="p_p col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <p id="GettoKnowsus">Get to Knows us</p>
                        <p>About Us</p>
                        <p>careers</p>
                        <p>Amazon Cares</p>
                        <p>Gift a smile</p>
                        <p>Amazon science</p>
                    </div>
                    <div className="p_p col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <p id="GettoKnowsus">Connect with us</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                    <div className="p_p col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <p id="GettoKnowsus">Make money with us</p>
                        <p>Sell on Amazon</p>
                        <p>Sell under Amazon Accelerator</p>
                        <p>Amazon Global Selling</p>
                        <p>Become an affiliate</p>
                        <p>Fulfillment by Amazon</p>
                        <p>Advertise Your products</p>
                        <p>Amazon Pay on Merchants</p>
                    </div>
                    <div className="p_p col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <p id="GettoKnowsus">Let Us Help You </p>
                        <p>COVID-19 and Amazon</p>
                        <p>Your Account</p>
                        <p>Returns Center</p>
                        <p>100% Purchase Protection</p>
                        <p>Amazon App Download</p>
                        <p>Amazon Assistant Download</p>
                        <p>Help</p>
                        <Link to={"/adminlogin"} style={{color: 'white'}}><p>Admin Login</p></Link>
                    </div>
                </div>
                <div className="row last7">
                    <div className="col-xl-12">
                        <hr id="new_hr" />
                    </div>
                    <div className="in col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <img src={last_in} />
                        <FontAwesomeIcon icon={faGlobe} className="global" />
                        <select className="op">
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Tamil</option>
                            <option>Italic</option>
                            <option>French</option>
                        </select>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <p id="country">Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore Spain Turkey United Arab Emirates United</p>
                        <p id="country">Kingdom United States</p>
                    </div>
                </div>
                <div className="row bottom_final">
                    <div className="col-xl-2  col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            AbeBooks</p>
                        <p className="black_1">Books, art
                            & collectibles</p>
                    </div>
                    <div className="col-xl-2  col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            Amazon Web Service</p>
                        <p className="black_1">Scalable Cloud Coumpting</p>
                    </div>
                    <div className="col-xl-2  col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            Audible</p>
                        <p className="black_1">Download Audio Books</p>
                    </div>
                    <div className="col-xl-2  col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            DPReview</p>
                        <p className="black_1">Digital Photography</p>
                    </div>
                    <div className="col-xl-2  col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            IMDB</p>
                        <p className="black_1">Movies,TV and Celebrities</p>
                    </div>
                </div>
                <div className="row bottom_final">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            Shopbop</p>
                        <p className="black_1">Desiger Fashion Brands
                        </p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            Amazon BUssiness</p>
                        <p className="black_1">Everything For Your BUssiness</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            Prime Now</p>
                        <p className="black_1">2- Hours Delivery on Everyday Items</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <p className="black_1">
                            Amazon Prime Music</p>
                        <p className="black_1">90,Million Songs,ad-free, Over 15 prodcast epsodies </p>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Bottom;