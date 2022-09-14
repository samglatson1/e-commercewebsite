import React from "react";
import "./mainpage2.css";
import fur from "./navbar/fur.jpg";
import fur2 from "./navbar/fur1.jpg";
import fur3 from "./navbar/fur3.jpg";
import fur4 from "./navbar/fur4.jpg";
import pro1 from "./navbar/pro1.jpg";
import pro2 from "./navbar/pro2.jpg";
import pro3 from "./navbar/pro3.jpg";
import pro4 from "./navbar/pro4.jpg";
import laptop from "./navbar/laptop.jpg";
import app1 from "./navbar/app1.jpg";
import app2 from "./navbar/app2.jpg";
import app3 from "./navbar/app3.jpg";
import app4 from "./navbar/app4.jpg";
import { Carousel } from "react-bootstrap";
import cushion1 from "./navbar/Capture3.PNG";
import cushion2 from "./navbar/Capture4.PNG";
import cushion3 from "./navbar/Capture5.PNG";
import kitchen1 from "./navbar/Capture6.PNG";
import kitchen2 from "./navbar/Capture7.PNG";
import kitchen3 from "./navbar/Capture8.PNG";
import Navbar from "./navbar/navbar.js";
import Navbar2 from "./navbar/navbar2/navbar2.js";
import { Link } from "react-router-dom";
function Mainpage2(){
    return(
        <>
            {/* <div>
                <Navbar />
                <Navbar2 />
            </div> */}
                <div className="container-fluid con1">
                    <div className="row">
                        <div className="box1 col-xl-3 col-lg-3  col-md-2 col-sm-3 col-3">
                            <div className="row col-lg-12 col-sm-1 col-1">
                                <div className="row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <p>Top reated , premium quality | Amazon Brands & more</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <img src={fur} className="fur" img-fluid="responsive" />
                                        <p className="descr">Home products</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <img src={fur2} className="fur" img-fluid="responsive"  />
                                        <p className="descr">Furniture</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <img src={fur3} className="fur" img-fluid="responsive"  />
                                        <p className="descr">Home essentianls</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <img src={fur4} className="fur" img-fluid="responsive"  />
                                        <p className="descr">Clothing essentials</p>
                                    </div>
                                </div>
                                <div className="see_more">
                                    <p>See more</p>
                                </div>
                            </div>
                        </div>
                        <div className="box2 col-lg-3  col-md-2 col-sm-3 ">
                            <div className="row col-lg-12 col-sm-1 col-1">
                                <div className="row">
                                    <p>Shop by cateogry</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={pro1} className="fur" />
                                        <p className="descr">Fresh</p>
                                    </div>
                                    <div className="col-lg-6">
                                    <Link to={"/mobiles"}>     <img src={pro2} className="fur" />
                                        <p className="descr">Mobiles</p></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={pro3} className="fur" />
                                        <p className="descr">Fashion</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={pro4} className="fur" />
                                        <p className="descr">Electronics</p>
                                    </div>
                                </div>
                                <div className="see_more">
                                    <p>See more</p>
                                </div>
                            </div>
                        </div>
                        <div className="box3 col-lg-3  col-md-2 col-sm-3 ">
                            <div className="row">
                                <p>Up to 70% | Clearence store </p>
                            </div>
                            <div className="row">
                                <img src={laptop} className="fur2" />
                            </div>
                            <div className="see_more">
                                <p>See more</p>
                            </div>
                        </div>
                        <div className="box4 col-lg-3  col-md-2 col-sm-3 ">
                            <div className="row col-lg-12 col-sm-1 col-1">
                                <div className="row">
                                    <p>Shop by cateogry</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={app1} className="fur" />
                                        <p className="descr">Fresh</p>
                                    </div>
                                    <div className="col-lg-6">
                                      <img src={app2} className="fur" />
                                        <p className="descr">Mobiles</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={app3} className="fur" />
                                        <p className="descr">Fashion</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={app4} className="fur" />
                                        <p className="descr">Electronics</p>
                                    </div>
                                </div>
                                <div className="see_more">
                                    <p>See more</p>
                                </div>
                            </div>
                        </div>
                        <div className="box4 col-lg-3  col-md-2 col-sm-3 ">
                            <div className="row col-lg-12 col-sm-1 col-1">
                                <div className="row">
                                    <p>Shop by cateogry</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={app1} className="fur" />
                                        <p className="descr">Fresh</p>
                                    </div>
                                   <div className="col-lg-6">
                                        <img src={app2} className="fur" />
                                        <p className="descr">Mobiles</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={app3} className="fur" />
                                        <p className="descr">Fashion</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={app4} className="fur" />
                                        <p className="descr">Electronics</p>
                                    </div>
                                </div>
                                <div className="see_more">
                                    <p>See more</p>
                                </div>
                            </div>
                        </div>
                        <div className="box4 col-lg-3  col-md-2 col-sm-3 ">
                            <div className="row col-lg-12 col-sm-1 col-1">
                                <div className="row">
                                    <p>Shop by cateogry</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={app1} className="fur" />
                                        <p className="descr">Fresh</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={app2} className="fur" />
                                        <p className="descr">Mobiles</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={app3} className="fur" />
                                        <p className="descr">Fashion</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={app4} className="fur" />
                                        <p className="descr">Electronics</p>
                                    </div>
                                </div>
                                <div className="see_more">
                                    <p>See more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row sareecar">
                        <div className="col-lg-12">
                            <div className="row  sareecon">
                                    <p>Up to 70% off | Cushion covers from Ahmedabad & Surat markets</p>
                            </div>
                        <Carousel fade className="sareecon">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={cushion1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={cushion2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={cushion3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                    <div className="row sareecar">
                        <div className="col-lg-12">
                            <div className="row  sareecon">
                                    <p>Up to 70% off | Kitchen picks from Ahmedabad & Surat markets</p>
                            </div>
                        <Carousel fade className="sareecon">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={kitchen1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={kitchen2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={kitchen3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                  
</div>
                
            
        </>
    );
}
export default Mainpage2;