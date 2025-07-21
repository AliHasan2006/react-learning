

import { StrictMode } from "react"
// import Chai from "./Chai"
function App() {
let counterValue = 5

const addValue = () =>{
  console.log(Math.random());
}

  return (
    // <>
    //   <Chai></Chai> 
    //     <h1>Chai is Ready</h1>
    //     <h2>Here is Your Chai</h2>
    //     <h1>@arpitaa_2009</h1>
    // </>
    <>
    <h1>Chai aur React</h1>
    <h3>Counter Value is {counterValue}</h3>
    <button onClick={
      addValue
    }>addValue</button>
    <br></br>
    <button onClick={
      removeValue
    }>removeValue</button>
    </>
  )
}

export default App
