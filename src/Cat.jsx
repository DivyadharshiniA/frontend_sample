// // import { useState } from "react"

// // function Cat() {
// //     // let [count, setCount] = useState(0)  
// //     let[change, setChange] = useState(0)
// //     return (

// //         <div className='text1'>
// // {/*             
// //             <button onClick={() => setCount(count + 1)}>+</button>
// //             <h1>count: {count}</h1>
// //             <button onClick={() => setCount(count - 1)}>-</button> */}

// //             <form>
// //                 <label>Enter your name:</label>
// //                 <input type="text"  defaultValue={change}   />    
              
// //                 <label>Enter your name:</label>
// //                 <input type  = "text" onChange={(e) => setChange(e.target.value)} />
// //             </form>


// //         </div>  
// //     ) 
// // }

// // export default Cat



import { useState } from "react";

function Cat({ VALUE})  {
  //const [change, setChange] = useState("Avi"); 
  return (
    // <div className="text1">
    //   <form>

    //     <label>Default Name:</label>
    //     <input type="text" value={change}   />
    //     <label>Change Name:</label>
    //     <input type="text"  placeholder="Enter new name" onChange={(e) => setChange(e.target.value)}  />  
    //   </form>
    // </div>

    <div className="text1"> 
      <h1>{5+5}</h1>
    </div>
  );
}

export default Cat;