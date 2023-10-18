import React, { useState } from 'react';

 function Stting () {
    const [PrivateRoute , setPrivateRoute] = useState(false);
    const Value = () => {
        setPrivateRoute(!PrivateRoute);
    };
    <div>
        return <button onClick={Value}>togl state</button>
    </div>
 } ;
 export default Stting;