// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import Home from './Home.jsx'
// // import AboutUs from './AboutUs.jsx'
// // import ContactUs from './ContactUs.jsx'
// import App from './App.jsx'
// import Apps from './Apps.jsx'
// // import Form from './Form.jsx'
// // import Apple from './Apple'
// // import Book from './Book'
// //import Dog from './Dog'
// //import propsType from 'prop-types'
// //import Cat from './Cat'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Apps/>
//     {/* <Form/>
//     <Apple/>
//     <Book></Book> 
//     <Cat/>
//     <Dog value1={10} value2={20} />*/}
//     {/*<Home/>
//     <AboutUs/>
//     <ContactUs/> */}
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from "./Apps";
createRoot(document.getElementById('root')).render(
  <StrictMode>
          <Apps />      
  </StrictMode>,
)