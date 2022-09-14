import React from "react";
import "./navbar.css";
import img from './sign4.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import indian from './ind1.jpg';
import { Dropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="container-fluid p-0 m-0 feer">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0 m-0">
                        <ul className="navbac">
                            <div className="row">
                                <div className="col-xl-3 col-lg-1 col-md-1 col-sm-6 col-6">
                                    <li>
                                        <Link to={"/"}><img src={img} className="img1" /></Link>
                                    </li>
                                </div>
                                <div className=" col-xl-6 col-lg-1 col-md-2 col-sm-6 col-6 p2 ml-3">
                                    <li >
                                        <div className="icon ">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <div className="add ">
                                            <p>Hello
                                                select your address
                                            </p>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div>
                                <li>
                                    <div className="row nav-search ">
                                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    All
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                                            <input type={'text'} className="text" />
                                        </div>
                                        <button className="scerchicon_place">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="scerchicon" />
                                        </button>
                                    </div>
                                </li>
                            </div>
                            <div className="row">
                                <div>
                                    <li className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <img src={indian} className="indian1" />
                                    </li>
                                </div>
                            </div>
                            <div className="row">

                                <div className="acco col-xl-12 col-lg-9 col-md-8 col-sm-8 col-8">
                                   <Link to={"/login"}style={{color: 'white'}}> <li>
                                        <p className="sign-con">Hello,Sign in <span className="span2">Account & Lists</span></p>
                                    </li></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="returns col-xl-10 col-lg-8 col-md-8 col-sm-8 col-8 ml-5 ">
                                    <li>
                                        <p className="sign-con">Returns<span className="span2"> & Orders</span></p>
                                    </li>
                                </div>
                            </div>
                            <li >
                                <div className="row cart">
                                    <div className=" col-xl-6 ml-3">
                                        <FontAwesomeIcon icon={faCartShopping} className="s1" />
                                    </div>
                                    <div className=" cart1">
                                        <p>Cart</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Navbar;