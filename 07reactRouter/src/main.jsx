import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home.jsx'
import AboutUs from './componenets/AboutUs/AboutUs.jsx'
import ContactUs from './componenets/ContactUs/ContactUs.jsx'
 
const router = createBrowserRouter([{
 
  path: '/',
  Element: <Layout />,
  children: [
    {
      path:'',
      element: <Home />
    },
    {
      path:'about',
      element: <AboutUs />
    },
    {
      path:'contact',
      element: <ContactUs />
    }
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

