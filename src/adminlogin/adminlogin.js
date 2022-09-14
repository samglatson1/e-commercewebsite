import React from "react";
import { Link } from "react-router-dom";
import "./adminlogin.css";
import adminimg from "./user-interface.png";
 function Adminlogin(){
    return(
        <>
            <div className='form123'>
                <div>
                    <img src={adminimg} className="login-img" />
                    <h4 className='log123'>ADMIN LOGIN</h4>
                </div>
                <div>
                    <div>
                        <input type={'text'} placeholder={'Enter a User id'} className="password" />
                    </div>
                    <div>
                        <input type={'password'} placeholder={'Enter a password'} className="password" />
                    </div>
                    <div>
                        <input type={'email'} placeholder={'Enter a email'} className="password" />
                    </div>
                    <div >
                        <div className='rem321'>
                            <input type={'checkbox'} />Remember me
                        </div>
                        <div>
                            <p className="forget321">Forget Password ?</p>
                        </div>
                    </div>
                    <div>
                      <Link to={"/productsimport"}>  <button className="button789">LOG IN</button></Link>
                    </div>
                </div>
            </div>
           
    </>
    );
}
export default Adminlogin;