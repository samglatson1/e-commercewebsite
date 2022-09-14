import React from "react";
import "./mainpage1.css";
import car_img1 from "./img1.jpg";
import car_img2 from "./img2.jpg";
import car_img3 from "./img3.jpg";
import car_img4 from "./img4.jpg";
import car_img5 from "./img5.jpg";
import car_img6 from "./img6.jpg";
import car_img7 from "./img7.jpg";
import car_img8 from "./img8.jpg";
import { Carousel } from "react-bootstrap";
import Navbar from "./navbar.js";
import Navbar2 from "./navbar2/navbar2.js";


function Mainpage(){
    return(
        <>
            {/* <div>
                <Navbar />
                <Navbar2 />
            </div> */}
            <div className="container-fluid car1">
                <div className="row">
                    <Carousel fade className="carousel col-xl">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img5}
                                alt="Fivth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img6}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img7}
                                alt="Seventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={car_img8}
                                alt="Eigth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Caption>
                            <div className="row division">
                            <div className="division1 col-xl col-lg-3 col-md-3 col-sm-3">
                                <p className="text_1">Top  rated, premium quality | Amazon Brands & more</p>
                            </div>
                            <div className="division2 col-xl col-lg-3 col-md-3 col-sm-3">
                            <p className="text_2">Up to 70% off | Clearence store</p>
                            </div>
                            <div className="division2 col-xl col-lg-3 col-md-3 col-sm-3">
                                <p className="text_1">Har Ghar Tiranga | 13th-15th August</p>
                            </div>
                            <div className="division3 col-xl col-lg-3  col-md-3 col-sm-3">
                                <p  className="text_2">Sign in for your best experience </p>
                                <button className="su">Sign in securily</button>
                            </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel>                     
                </div>
        </div>
        </>
    );
}
export default Mainpage;