import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import AboutUs from './components/AboutUs.jsx'
import Contact from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {                          
//        path: "",
//        element: <Home/>
//       },{
//         path: "about",
//         element: <AboutUs />
//       },{
//         path: "contact",
//         element: <Contact />                                           
//       }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='about' element={<AboutUs/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='user/:userid' element={<User/>}></Route>
        <Route path='github' element={<Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
