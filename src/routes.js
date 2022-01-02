import React from "react";
import {BrowserRouter, Router,  Route ,Switch, Routes} from "react-router-dom";


import HomePage from "./HomePage";
import AddUser from './AddUser';
import RemoveUser from './RemoveUser'


 const RoutesData =()=> {
    
        return (
                <div>HomePage</div>
        //     <BrowserRouter>
        //         <Routes>
               
        //         <Route path="/home" exact component={HomePage} />
        //             <Route path="/adduser" exact component={AddUser} />
        //             <Route path="/remove user"  exact component={RemoveUser} />
                
                    
                    
        //         </Routes>
        //         </BrowserRouter>
            
        )
    
}
export default RoutesData