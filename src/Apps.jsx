// import React from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import CreateUser from './CreateUser';
// import UpdateUser from './UpdateUser';
// import User from './User';
// const Apps = () => {
//     return(
//         <div>
//             <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<User />} />
//                 <Route path="/create" element={<CreateUser />} />
//                 <Route path="/update" element={<UpdateUser />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }
// export default Apps;

// import React from "react";

// import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

// import Updateuser from "./UpdateUser";
// import User from "./User";
// import Createuser from "./CreateUser";


// const Apps = () => {
//     return (
//         <div>
//             {/* <h1>hello apps</h1> */}
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<User/>} />
//                     <Route path="/create" element={<Createuser/>} />  
//                     <Route path="/update" element={<Updateuser/>} />
//                 </Routes>
//             </Router>    
//         </div>
//     );
// };

// export default Apps;


import React from "react";

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Updateuser from "./UpdateUser";
import User from "./User";
import Createuser from "./CreateUser";
import './index.css';

const Apps = () => {
    return (
        <div>
            {/* <h1>hello apps</h1> */}
            <Router>
                <Routes>
                    <Route path="/" element={<User/>} />
                    <Route path="/create" element={<Createuser/>} />  
                    <Route path="/update/:id" element={<Updateuser/>} />
                
                </Routes>
            </Router>    
        </div>
    );
};

export default Apps;