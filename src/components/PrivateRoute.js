import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute =({children, isAuth}) =>{
    return ( 
        isAuth ===true? children:<Navigate to = '/Login' replace/>

    )
}
export default PrivateRoute;