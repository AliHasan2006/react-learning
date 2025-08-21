import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx'
// import Home from './componenets/Home/Home.jsx'
// import About from './componenets/AboutUs/AboutUs.jsx'
// import Contact from './componenets/ContactUs/ContactUs.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         {
//           path: 'about',
//           element: <About />,
//         },
//         {
//           path: 'contact',
//           element: <Contact />,
//         },
//       ],
//     },
//   ],
//   {
//     future: {
//       v7_startTransition: true,
//     },
//   }
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Layout />
  </React.StrictMode>
)
