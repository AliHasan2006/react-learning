import { useState } from 'react'
import AddBtn from "./components/AddBtn"
import RemoveBtn from "./components/RemoveBtn"
import FetchData from './components/FetchData'
import './App.css'
import { CartContextProvider } from './contexts/cartContext'

function App() {

  let [items,setItems] = useState(10);

  const addItems = () =>{
       setItems(items = items +1);
       console.log("item added");
       <p1>hi</p1>
       
  }

  const rmvItems = () =>{
setItems(items= items-1);
  }
 
  return (
  <CartContextProvider value={{items,addItems,rmvItems}}>
  <AddBtn />
  <br></br>
  <RemoveBtn />
  <br></br>
  <FetchData />
</CartContextProvider>
  )
}

export default App
