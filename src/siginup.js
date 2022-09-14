import React,{useState} from "react";
import sign from './sign1.jpg';
import axios from "axios";


export default function Siginup(){

const [name,setName]=useState();
const [number,setNumber] =useState();
const [email,setEmail] =useState();
const [password,setPassword] =useState();
const [confirmpassword,setConfirmpassword] =useState();

const adddata=()=>{
    let data={name:name,number:number,email:email,password:password,confirmpassword:confirmpassword}
    axios.post("http://localhost:3006/siginup",data).then(function(response){
        if(response.data.status==='inserted'){
            alert("inserted");
            window.location.reload();
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
            <h4 className="con">Create Account</h4>
            <h6 className="mobile">Your Name</h6>
            <input type={'text'} className="box"  onChange={(e)=>setName(e.target.value)}/><br/>
            <h6 className="mobile">Mobile Number</h6>
            <input type={'text'} className="box"  onChange={(e)=>setNumber(e.target.value)}/><br/>
            <h6 className="mobile">Email (optional)</h6>
            <input type={'text'} className="box"  onChange={(e)=>setEmail(e.target.value)}/><br/>
            <h6 className="mobile">Password</h6>
            <input type={'password'} className="box"  onChange={(e)=>setPassword(e.target.value)}/><br/>
            <h6 className="mobile">Confirm Password</h6>
            <input type={'password'} className="box"  onChange={(e)=>setConfirmpassword(e.target.value)}/><br/>
            <input type={'button'} className="but mb-3"  value={'Continue'}  onClick={adddata}/>
        </div>
    </div>
    <div className="neee">
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