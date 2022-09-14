// import React from "react";
import "./adminportal.css";
import axios from "axios";
import React, {useState,useEffect} from 'react';

function Adminportal(){
    const [details,setDetails]=useState([])

        const [Productname,setProductname] =useState('');
        const [Productseries,setProductseries] =useState('');
        const [ram,setRam] =useState('');
        const [Price,setPrice] =useState('');
        const [discount_price,setDiscount_price] =useState('');
        const [storage,setStorage] =useState('');
        const [storage2,setStorage2] =useState('');
        const [os,setOs] =useState('');
        const [cpuspeed,setCpuspeed] =useState('');
        const [color,setColor] =useState('');
        const [ratting,setRatting] =useState('');

        const adddata=()=>{
            let productdata={Productname:Productname,Productseries:Productseries,ram:ram,Price:Price,discount_price:discount_price,storage:storage,
            storage2:storage2,os:os,cpuspeed:cpuspeed,color:color,ratting:ratting}
            axios.post("http://localhost:3006/data",productdata).then(function(response){
                    if(response.data.status ==='inserted'){
                        alert('inserted')
                        window.location.reload();
                    }
            })
        }
    useEffect=(()=>{
        getdetails();
    },[])

    const getdetails=async()=>{
        const response=await axios.get("http://localhost:3006/data/")
        setDetails(response.data);
    }


    return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>ADMIN PORTAL</h3>
                    </div>
                </div>
                <div className="row adminlog">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
                        {/* <p>Product Id : <span> <input type={'text'}/></span></p> */}
                        <p>Product Name : <span><input type={'text'} className="paddingtop" onChange={(e)=>setProductname(e.target.value)}/></span></p>
                        <p>Product Series : <span><input type={'text'} className="paddingtop" onChange={(e)=>setProductseries(e.target.value)}/></span></p>
                        <p>Ram : <span><input type={'text'} className="paddingtop" onChange={(e)=>setRam(e.target.value)}/></span></p>
                        <p>Price : <span><input type={'text'} className="paddingtop" onChange={(e)=>setPrice(e.target.value)}/></span></p>
                        <p>Discount Price : <span><input type={'text'} className="paddingtop" onChange={(e)=>setDiscount_price(e.target.value)}/></span></p>
                        <p>Storage : <span><input type={'text'} className="paddingtop" onChange={(e)=>setStorage(e.target.value)}/></span></p>
                        <p>Storage2 : <span><input type={'text'} className="paddingtop" onChange={(e)=>setStorage2(e.target.value)}/></span></p>
                        <p>OS : <br/><span><input type={'text'} className="paddingtop" onChange={(e)=>setOs(e.target.value)}/></span></p>
                        <p>CPU Speed : <span><input type={'text'} className="paddingtop" onChange={(e)=>setCpuspeed(e.target.value)}/></span></p>
                        <p>Color : <span><input type={'text'} className="paddingtop" onChange={(e)=>setColor(e.target.value)}/></span></p>
                        <p>Ratting : <span><input type={'text'} className="paddingtop" onChange={(e) =>setRatting(e.target.value)}/></span></p>
                            <button className="btn btn-primary" onClick={adddata}>Add Details</button>                   
                    </div>
                </div>
            </div>
            </>
        );
}
export default Adminportal;