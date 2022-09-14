import React  from "react";
import Navbar  from "./navbar/navbar.js";
import Navbar2 from './navbar/navbar2/navbar2.js';
import Mainpage from "./navbar/mainpage1.js";
import Mainpage2 from "./mainpage2.js";
import Bottom from "./navbar/bottom.js";
import Product from "./navbar/product/product.js";
import Productdetail from "./navbar/product/productdetail/productdetail.js";
function Home(){
    return(
        <>       
            <Navbar />
            <Navbar2 />
            <Mainpage />
            <Mainpage2 />
            <Bottom/>
            {/* <Form/> */}
            {/* <Productdetail/> */}
        </>
  
    );
}
export default Home;