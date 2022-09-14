import React, {useState,useEffect} from "react";
import "./productdetail.css";
import s22 from "./s22.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img543 from "./amazon1234.PNG";
import offer from "./offer.PNG";
import Card from 'react-bootstrap/Card';
import replace from "./replace.PNG";
import delivery from "./delivery.PNG";
import relace from "./relace.PNG";
import door from "./doordelivery.PNG";
import hours from "./hours.PNG";
import axios from "axios";
import Navbar from "../../navbar";
import Navbar2 from "../../navbar2/navbar2";
import Bottom from "../../bottom";
import {Link,useParams} from "react-router-dom";
function Productdetail() {
    const [productname , setProducts] = useState('');
    const [color,setColor] = useState('');
    const [ram,setRam] =useState('');
    const [storage,setStorage] =useState('');
    const [processor,setProcessor] =useState('');
    const [discountprice,setDiscountprice] =useState('');
    const [ratting,setRatting] =useState('');
    const [battery,setBattery] =useState('');
    const [display,setDisplay] =useState('');
    const [price,setPrice] =useState('');
    const {id} = useParams();
    useEffect(()=>{
        totalproducts();
    });
    const totalproducts = async ()=>{
        console.warn(id);
       let response = await fetch("http://localhost:3006/details2/"+id);
       response = await response.json();
       setProducts(response[0].productname);
       setColor(response[0].color);
       setRam(response[0].ram);
       setStorage(response[0].storage);
       setProcessor(response[0].processor);
       setDiscountprice(response[0].discountprice);
       setRatting(response[0].ratting);
       setBattery(response[0].battery);
       setDisplay(response[0].display);
       setPrice(response[0].price);
    }
    


    return (
        <>
        <Navbar/>
        <Navbar2/>
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-8 col-12">
                        <img src={s22} className="imgheight" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-12">
                        <div className="row">
                            <div className="">
                                <p className="">{productname} ({color },{ram},{storage}) | {battery } | {display}</p>
                                <p className="SamsungStore">Visit the Samsung Store</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5 col-5">
                                <FontAwesomeIcon icon={faStar} className="fastar1" />
                                <FontAwesomeIcon icon={faStar} className="fastar1" />
                                <FontAwesomeIcon icon={faStar} className="fastar1" />
                                <FontAwesomeIcon icon={faStar} className="fastar1" />
                                <FontAwesomeIcon icon={faStar} className="fastar1" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-7 col-7 rating">
                                <p className="SamsungStore">{ratting} ratings | 401 ansered questions</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10 col-6">
                                <img src={img543} /><br />
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-2 col-6">
                                <p className="SamsungStore">for "samsung22"</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <p className="price1"><span className="discount">-17%</span>${discountprice}</p>
                            </div>  
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <span className="mrp">M.R.P:.</span> <span className="originalprice">${price}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <span className="mrp">Inclusive of all taxes </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <span className="mrp">EMI starts at $5,178.No Cost EMI available</span> <span className="SamsungStore">EMI option</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-md-7 col-sm-10 col-6">
                                <span className="offer4"><img src={offer} /> Offers</span>
                            </div>
                        </div>
                        <div className="row cardbank">
                            <Card style={{ width: '15rem' }} className="cardstyle">
                                <Card.Body>
                                    <Card.Title className="cardtitle">Bank Offer</Card.Title>
                                    <Card.Text>
                                        Upto $5,000.00 discount on select Credit Cards...
                                    </Card.Text>
                                    <Card.Link href="#" className="SamsungStore">5 Offers</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className="cardstyle">
                                <Card.Body>
                                    <Card.Title className="cardtitle">No cost EMI</Card.Title>
                                    <Card.Text>
                                        Upto $8,000.00 EMI interest savings on select Credit Cards..
                                    </Card.Text>
                                    <Card.Link href="#" className="SamsungStore">2 Offers</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Partner Offers</Card.Title>
                                    <Card.Text>
                                        Get GST invocie and save up to 28% on bussiness purchases.
                                    </Card.Text>
                                    <Card.Link href="#" className="SamsungStore">1 Offers</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2  col-lg-2 col-md-2  col-sm-3 col-3 days">
                                <img src={replace} className="days2" />
                                <p>7 Days replacement</p>
                            </div>
                            <div className="col-xl-2 col-lg-2  col-md-2 col-sm-3  col-3 days">
                                <img src={delivery} />
                                <p>Amazon Delivered</p>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3  days">
                                <img src={relace} />
                                <p>1 year warrenty</p>
                            </div>
                            <div className="col-xl-2  col-lg-2 col-md-2  col-sm-3 col-3  days">
                                <img src={door} />
                                <p>No-contact delevery</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-1 col-lg-1 col-md-2 col-sm-4 col-2">
                                <img src={hours} />
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-10">
                                <span className="firstproduct">
                                    Free product support will be provided within 24 hours in the unlikely event of a technical defect under replacement period. Learn More </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <p>Colour:<span className="PhantomBlack">{color}</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <p>Size name:<span className="PhantomBlack">{ram} + {storage}</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                                <button className="gb">{ram} + {storage}</button>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <button>{ram} + {storage}</button>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <p>Pattern name:<span className="PhantomBlack">{color}</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <p className="PhantomBlack">Brand</p>
                                <p className="PhantomBlack">Model Number</p>
                                <p className="PhantomBlack">RAM Memory Installed Size</p>
                                <p className="PhantomBlack">Processor</p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <p>	{productname}</p>
                                <p>SM-S908EZKGINU</p>
                                <p>{ram}</p>
                                <p>	{processor}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <hr className="hrwidth" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <p className="PhantomBlack">About this item</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <ul className="newull">
                                    <li >The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.</li>
                                    <li>5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.</li>
                                    <li>The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.</li>
                                    <li>Our most advanced Pro-grade Camera yet, packing the power of a professional's kit in one handheld device. Also lets you make your nights epic with Nightography: The sensor pulls in more light, the Super Clear Lens tones down lens flare, and fast-acting AI delivers near-instant intelligent processing.</li>
                                    <li>Connector type: usb type c</li>
                                </ul>
                                <p className="SamsungStore">See more product details</p>
                            </div>
                        </div>
                    </div>
                </div>
                             
                
            </div>
            <Bottom/>
        </>
    );
}
export default Productdetail;