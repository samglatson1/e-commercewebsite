import React from "react";
import "./navbar2.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from  "@fortawesome/free-solid-svg-icons";
import amazon from "./new2.png";
import {Link} from "react-router-dom";
 function Navbar2(){
    return(
        <>

            <div className="container-fluid ">
                <div className="row">
                    <div className="">
                    <ul className="navbac2">
                        <li className="menu2 ">
                            <FontAwesomeIcon icon={faBars} />  All
                        </li>
                        <li className="best2" >
                            <p>Best Sellers</p>
                        </li>
                        <li className="best2">
                            <p>Today's Deals</p>
                        </li>
                        <li className="best2">
                           <Link to={"/mobiles"} style={{color: 'white',textDecoration:'none'}}> <p>Mobiles</p></Link>
                        </li>
                        <li className="best2">
                            <p>Customer Service</p>
                        </li>
                        <li className="best2">
                            <p>Books</p>
                        </li>
                        <li className="best2">
                            <p>Electronics</p>
                        </li>
                        <li className="best2">
                            <p>Prime</p>
                        </li>
                        <li className="best2">
                            <p>Fashion</p>
                        </li>
                        <li className="best2">
                            <p>New Releases</p>
                        </li>
                        <li className="best2">
                        <Link to={"/adminlogin"} style={{color: 'white',textDecoration:'none'}}><p>Admin Login</p></Link>
                        </li>
                        <li className="best2">
                            <p>Amazon Pay</p>
                        </li>
                        <li className="don" >
                            <div>
                                <img src={amazon} className="amazon" />
                            </div>
                            <div>
                                <p className="best4">Shopping made easy | Download the app</p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </>
    );
 }
 export default Navbar2;