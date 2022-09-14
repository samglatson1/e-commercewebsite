// import React from "react";
import axios from "axios";
import "./product.css";
import samsung from "./samsung.PNG";
import mob1 from "./mob4.jpg";
import mob2 from "./mob5.jpg";
import mob3 from "./mob6.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import mobile1 from "./samsung1.jpg";
import prime from "./prime.PNG";
import Bottom from "../bottom.js";
import Navbar  from "../navbar.js";
import React,{useState,useEffect} from 'react';
import Navbar2 from "../navbar2/navbar2";
import {Link} from "react-router-dom";
function Product(){
    
    const [totalproduct,setTotalproduct] =useState([]);

    useEffect(()=>{totalproducts();},[]);
    
    const totalproducts =async ()=>{
            const response=await axios.get("http://localhost:3006/details");
         setTotalproduct(response.data);
        }
     
 
 
    return(
        <>
        
        <Navbar/>
        <Navbar2/>
            <div className="container-fluid mtvkj" >
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <p className="brand">Delivery Day</p>
                        <input type={'checkbox'} /> Get It By Tommorrow<br/>
                        <input type={'checkbox'} /> Get It in 2 Days
                        <p className="brand">Department</p>
                        <p className="left_con">Smartphones & Basic Mobiles</p>
                        <p className="left_con">Smartphones</p>
                        <p className="left_con">Basic Mobiles</p>
                        <p className="left_con">Electronics</p>
                        <p className="left_con">Computers & Accessories</p>
                        <p className="left_con">Car & Motorbike</p>
                        <p className="left_con">Home & Kitchen</p>
                        <p className="left_con">Tools & Home Improvement</p>
                        <p className="left_con">Office Products</p>
                        <p className="left_con">Industrial & Scientific</p>
                        <p className="left_con">Musical Instruments</p>
                        <p className="left_con">Health & Personal Care</p>
                        <p className="left_con">Toys & Games</p>
                        <p className="left_con">Customer Review</p>
                        <p className="brand">Customer Review</p>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> & Up
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> & Up
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> & Up
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> & Up
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <FontAwesomeIcon icon={faStar} className="fastar" /> & Up
                            </div>
                        </div>
                        <p className="brand">Brand</p>
                        <input type={'checkbox'} /> Redmi<br/>
                        <input type={'checkbox'} /> Apple<br/>
                        <input type={'checkbox'} /> Oneplus<br/>
                        <input type={'checkbox'} /> Oppo<br/>
                        <input type={'checkbox'} /> Realme<br/>
                        <input type={'checkbox'} /> Nokia<br/>
                        <input type={'checkbox'} /> Samsung<br/>
                        <input type={'checkbox'} /> LG<br/>
                        <input type={'checkbox'} /> Vivo<br/>
                        <input type={'checkbox'} /> icall<br/>
                        <input type={'checkbox'} /> ASUS<br/>
                        <input type={'checkbox'} /> Techno<br/>
                        <input type={'checkbox'} /> Micromax<br/>
                        <input type={'checkbox'} /> Lava<br/>
                        <input type={'checkbox'} /> Karbon<br/>
                        <input type={'checkbox'} /> HTC<br/>
                        <p className="brand">Price</p>
                        <p className="left_con1">$1000-$5000</p>
                        <p className="left_con1">$5000-$10000</p>
                        <p className="left_con1">$10000-$20000</p>
                        <p className="left_con1">Over $20000</p>
                        <p className="brand">Deals</p>
                        <input type={'checkbox'} /> Today deals
                        <p className="brand">Mobile Phone Operating System</p>
                        <input type={'checkbox'} /> Android<br/>
                        <input type={'checkbox'} /> ios<br/>
                        <p className="brand">Pay On Delivery</p>
                        <input type={'checkbox'} />Eligible for Pay On Delivery<br/>
                        <p className="brand">Internal Memory</p>
                        <input type={'checkbox'} /> Less than 3.9GB<br/>
                        <input type={'checkbox'} /> 4GB<br/>
                        <input type={'checkbox'} /> 6GB<br/>
                        <input type={'checkbox'} /> 8GB<br/>
                        <input type={'checkbox'} /> 12GB<br/>
                        <input type={'checkbox'} /> 16GB<br/>
                        <input type={'checkbox'} /> 32GB<br/>
                        <input type={'checkbox'} /> 64GB<br/>
                        <input type={'checkbox'} /> 128GB<br/>
                        <input type={'checkbox'} /> 256GB & More<br/>
                        <p className="brand">RAM</p>
                        <input type={'checkbox'} /> 8&above<br/>
                        <input type={'checkbox'} /> 6GB<br/>
                        <input type={'checkbox'} /> 4GB<br/>
                        <input type={'checkbox'} /> 3GB<br/>
                        <input type={'checkbox'} /> 2GB<br/>
                        <input type={'checkbox'} /> 1GB<br/>
                        <input type={'checkbox'} /> Less than 512MB<br/>
                        <p className="brand">Battery Capacity</p>
                        <input type={'checkbox'} /> Less than 1000<br/>
                        <input type={'checkbox'} /> 1000-2000<br/>
                        <input type={'checkbox'} /> 2000-3000<br/>
                        <input type={'checkbox'} /> 3000-5000<br/>
                        <input type={'checkbox'} /> Above 6000<br/>
                    </div>
                    <div className="col-xl-9  col-lg-9 col-md-9 col-sm-9 col-9">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                               <Link to={"/samsungs22"}> <img src={samsung} className="Samsung" /></Link>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <h5>Great Deals On Samsung Series</h5>
                                <p>Shop Samsung </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                                <img src={mob1} />
                                <p className="product_name">Samsung Galaxy M13(Midnight Blue,4Gb,64Gb Storage) | 6000mAh Battery | Upto  8GbRAM</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 1,85,997
                                <img src={prime} />
                            </div>
                            <div className="col-xl-4   col-lg-4 col-md-4 col-sm-4 col-5 mobbac">
                                <img src={mob2} />
                                <p className="product_name">Samsung Galaxy M33 5G(Deep ocean Blue,4Gb,64Gb Storage) | 6000mAh Battery | Upto  8GbRAM</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 75,856
                                <img src={prime} />
                            </div>
                            <div className="col-xl-4  col-lg-4 col-md-4 col-sm-4 col-6 mobbac">
                                <img src={mob3} />
                                <p className="product_name">Samsung Galaxy M13(Mystique Green,4Gb,64Gb Storage) | 6000mAh Battery | Upto  8GbRAM</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 7,85,965
                                <img src={prime} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 result">
                                <h3>RESULTS</h3>
                            </div>
                        </div>
                        { totalproduct.map((product, index) => (

                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                            <Link to={"/samsungs22"}> <img src={mobile1} /></Link> 
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">          
                                        <Link to={"/productdetail/"+product.id} style={{color: 'black',textDecoration:'none'}} ><p>{product.productname} ({product.color},{product.ram},{product.storage}) | {product.processor} | {product.camera} | {product.battery} | {product.additionalfeature}  
                                             | {product.display} | {product.ramextend} </p>
</Link>
                                 <FontAwesomeIcon icon={faStar} className="fastar" />
                                 <FontAwesomeIcon icon={faStar} className="fastar" />
                                 <FontAwesomeIcon icon={faStar} className="fastar" />
                                 <FontAwesomeIcon icon={faStar} className="fastar" /> {product.ratting}
                                 <p>${product.discountprice}<span className="strike">{product.price}</span>({product.offer}off)</p>
                                 <p>{product.additionalfeature}</p>
                                 <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                     FREE Delivery by Amazon</p>
                                     <p>+2 color/patterns</p>
                               
                            </div>
                           
                        </div>
                        ))}
                        {/* <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile2} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p></p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 700
                                <p>$49,888<span className="strike">74,855</span>(20% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div>
                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile3} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p>Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 54,845
                                <p>$17,899<span className="strike">20,154</span>(20% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div>
                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile4} className="oppo" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p>OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 18,555
                                <p>$20,144<span className="strike">22,154</span>(20% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div>
                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile5} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p>Redmi 9 Activ (Coral Green, 4GB RAM, 128GB Storage)</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 17,845
                                <p>$17,899<span className="strike">20,154</span>(20% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div>
                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile6} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p>Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage)</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 1,845
                                <p>$13,899<span className="strike">16,154</span>(17% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div>
                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile7} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p>realme narzo 50i (Mint Green, 4GB RAM+64GB Storage) - 6.5" inch Large Display | 5000mAh Battery</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 10,845
                                <p>$15,899<span className="strike">16,154</span>(10% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div>
                        <div className="row product_mob">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-3">
                                <img src={mobile8} className="oppo" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm- col-">
                                <p>Redmi Note 11T 5G (Matte Black, 6GB RAM, 128GB ROM)| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers|Get 2 Months of YouTube Premium Free!</p>
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" />
                                <FontAwesomeIcon icon={faStar} className="fastar" /> 10,845
                                <p>$15,899<span className="strike">16,154</span>(10% off)</p>
                                <p>Save extra with No Cost EMI</p>
                                <p><span><img src={prime} /></span>Get it by tomorrow, August 18
                                    FREE Delivery by Amazon</p>
                                    <p>+2 color/patterns</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Bottom/>
           
        </>
    );
}
export default Product;