import React, { useState,useEffect } from "react";
import sign from './sign1.jpg';
import "./sign.css";
import {Link} from "react-router-dom";
import axios from "axios";

function Sign (){
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const adddata =()=>{
        let datastring={email:email,password:password}
        axios.post("http://localhost:3006/sigin",datastring).then(function(res){
                if(res.data.status==='error'){
                alert("invalid password")
            }
            else if(res.data.status==='correct'){

                alert("login succesfully"); 
                window.location.href="/";

            }
            else if(res.data.status==='error1'){
                alert("invalid email");
            }
        })      
    }








    return(
    <>
    
    <div className="loo" > 
        <div>
            <img src={sign} className="sign"/>
        </div>           
        <div className="mainbox">
            <h2 className="con">Sign-In</h2>
            <h5 className="mobile">Email or mobile phone number</h5>
            <input type={'text'} className="box" onChange={(e)=>setEmail(e.target.value)} /><br/>
            <h5 className="mobile">Enter Password</h5>
            <input type={'password'} className="box"  onChange={(e)=>setPassword(e.target.value)}/><br/>
            <input type={'button'} className="but"  value={'Continue'} onClick={adddata}/>
            <p className="para">By continuing, you agree to Amazon's <span className="span1">Conditions of Use </span>and <span className="span1">Privacy Notice.</span></p>
            <div>
                <p className="sel">Need help?</p>
                <p className="sel">Forgot Password</p>
                <p className="sel">Other issues with Sign-In</p>
            </div>
        </div>
    
    </div>
            <div className=" row noww">
                <div className="col-xl-2 ">
                    <hr />
                </div>
                <div className="col-xl-2">
                    <p className="last1">New to Amazon?</p>

                </div>
                <div className="col-xl-2 ">
                    <hr />
                </div>
            </div>
    <div className="neee">
       <Link to={"/signup"}> <input type={'button'} className="finalbutton" value={'Create your Amazon account'} /></Link>
    </div>
    <div className="neee">
        <hr className="hr"/>
        <div className="help">
            <div>
                <p className="para"><span className="span1">Conditions of Use</span></p>
            </div>
            <div>
                <p  className="para"><span className="span1">Privacy Notice</span></p>
            </div>
            <div>
                <p className="para"><span className="span1">Help</span></p>
            </div>

        </div>
            <div>
                <p className="lastcon">© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
    </div> 
</>
    );
}
export default Sign;