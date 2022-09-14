import Sign from "./sign.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home.js";
import Product from "./navbar/product/product.js";
import Productdetail from "./navbar/product/productdetail/productdetail.js";
import Adminlogin from "./adminlogin/adminlogin.js";
import Adminportal from "./adminlogin/adminportal.js";
import Productsimport from "./navbar/product/productdetail/productsimport.js";
import Siginup from "./siginup.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mobiles" element={<Product/>}></Route>
          <Route path="/login" element={<Sign/>}></Route>
          <Route path="/productdetail/:id" element={<Productdetail/>}></Route>
          <Route path="/adminlogin" element={<Adminlogin/>}></Route>
          <Route path="/adminportal" element={<Adminportal/>}></Route>
          <Route path="/Productsimport" element={<Productsimport/>}></Route>
          <Route path="/signup" element={<Siginup/>}></Route>
        </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App;
