import axios from "axios";
import React,{useState} from "react";
import {Link} from 'react-router-dom';
export default function Productsimport(){

    const mystyle = {
        weidth: "70vh",
        border:"solid",
    }

    
    const [productname,setProductname] =useState('');
    const [color,setColor] =useState('');
    const [ram,setRam] =useState('');
    const [storage,setStorage] =useState('');
    const [battery,setBattery] =useState('');
    const [ramextend,setRamextend] =useState('');
    const [additionalfeature,setAdditionalfeature] =useState('');
    const [camera,setCamera] =useState('');
    const [display,setDisplay] =useState('');
    const [processor,setProcessor] =useState('');
    const [ratting,setRatting] =useState('');
    const [price,setPrice] =useState('');
    const [discountprice,setDiscountprice] =useState('');
    const [offer,setOffer] =useState('');


    const adddata=()=>{
        let datastring={productname:productname,color:color,ram:ram,storage:storage,battery:battery,ramextend:ramextend,additionalfeature:additionalfeature,camera:camera,
        display:display,processor:processor,ratting:ratting,price:price,discountprice:discountprice,offer:offer}
        axios.post("http://localhost:3006/products",datastring).then(function(response){
            if(response.data.status==='inserted'){
                alert("inserted")
                window.location.reload();
            }
        })
    }

   
    return (
        <>

            <div className="container " >
                <div className="row">
                    <div className="row">
                        <h4>Enter the Productdetail here :-</h4>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                <div className="row">
                    <p>Product Name</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setProductname(e.target.value)} />
                </div>
                <div className="row">
                    <p>Color</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setColor(e.target.value)} />
                </div>
                <div className="row">
                    <p>Ram</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setRam(e.target.value)} />
                </div>
                <div className="row">
                    <p>Storage</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setStorage(e.target.value)} />
                </div>
                <div className="row">
                    <p>Battery</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setBattery(e.target.value)} />
                </div>

                <div className="row">
                    <p>Ram Extend</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setRamextend(e.target.value)} />
                </div>
                <div className="row">
                    <p>Additional Feature</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setAdditionalfeature(e.target.value)} />
                </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                <div className="row">
                    <p>Camera</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setCamera(e.target.value)} />
                </div>
                <div className="row">
                    <p>Display</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setDisplay(e.target.value)} />
                </div>
                <div className="row">
                    <p>Processor</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setProcessor(e.target.value)} />
                </div>
                <div className="row">
                    <p>Ratting</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setRatting(e.target.value)} />
                </div>
                <div className="row">
                    <p>Price</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="row">
                    <p>Discount Price</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setDiscountprice(e.target.value)} />
                </div>
                <div className="row">
                    <p>Offer</p>
                    </div>
                    <div className="row">
                    <input type={'text'} style={mystyle} onChange={(e)=>setOffer(e.target.value)} />
                </div>
                </div>
                <div className="row">
                    <button className="btn btn-primary mt-3" onClick={adddata}>Add Product</button>
                </div>
                <div className="row">
             <Link to={"/mobiles"}><button className="btn btn-light mt-3">See Products</button></Link>
                </div>
            </div>
        </>
    );
}