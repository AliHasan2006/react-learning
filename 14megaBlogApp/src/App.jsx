import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {login,logut} from './store/authSlice'
import authService from './appwrite/auth'
function App() {
//   // const [count, se/tCount] = useState(0)
// console.log(import.meta.env.VITE_APPWRITE_URL);
const [loading, setLoading] = useState(true);
const dispacth = useDispatch();

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispacth(login({userData }))
    }
    else{
      dispacth(logut())
    }
  })
  .finally(()=> setLoading(false))
},[])  
               
return !loading ? (
  <div>
    <h1>Hello Users</h1>
  </div>
) : null
}

export default App
