import React from 'react';
import Home  from './Home';
import Category from './Category';
import Admin from './Admin';
import Product from './Product';
import { Link , Routes , Route  } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

 
 const NavBar =() => {
    return ( 
        <>
  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <ul>
            <li class="nav-item">
              <Link to = "/"   class="nav-link" >Home</Link>
            </li>
            <li class="nav-item">
              <Link to = "/Category"  class="nav-link" >Category</Link>
            </li>
            <li class="nav-item">
              <Link to = "/Product"   class="nav-link " >Product</Link>
            </li>
            <li class="nav-item">
              <Link to = "/Admin"   class="nav-link" >Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/"  element= {<Home/>}/> 
        <Route path="/Category"  element= {<Category/>}/> 
        <Route path="/Product"  element= {<Product/>}/> 
        <Route path="/Admin"  element= {

            <PrivateRoute >
                <Admin/>

            </PrivateRoute>
        }/> 
        <Route path="/Login"  element= {<Login/>}/> 
        
      </Routes>
      </>



    )
 };
 export default NavBar;