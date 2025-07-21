import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  let countValue = 15;
  let [countValue, setCounter] = useState(5);
  // useState is the hook is used to change the counter value in whole ui. counteValue is a variable that holds the actual value and setcounter is the method 
   
  // const addBtn = document.getElementById('addBtn')
  // addBtn.addEventListener('click', (e) =>{
  //  console.log('clicked');
   
  // }) this code is not working

  function addValue() {
  
    if (countValue <20) {
      setCounter(countValue + 1)
  
      /* here's a most asking interveiw question - what is the output after this change in the code 
      setCounter(countValue + 1)
      setCounter(countValue + 1)
      setCounter(countValue + 1)
      setCounter(countValue + 1) 

       the value of counter will be increse by one only
       means jb hum stcounter ko baar baar call krte hain to use state ek bundle fuccntions ko leta hai aur ui update krta hai isliye coutner ki value 15 hai to is code ke baad bh sirf ek hi badhegi 
       
       agr hm chahte hain is tarah counter value direct 15 se 19 ho jaye to setcounter ek call back leta hai jo counter ke previous value ko target krta hai jisse ye ui upadetion ho jata hai 
        setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1) 
  */
    }
  }
  function remvValue() {
   if (countValue >0) {
     setCounter(countValue - 1)
   }
  }


  return (
    <>
      <h1>Chai aur React | Ali Hasan</h1>
      <h2>This is a Counter Project.</h2>
      <h3>The count value is {countValue}</h3>
      <button onClick={addValue} >addValue</button>
      <br></br>
      <button onClick={remvValue}>removeValue</button>

    </>
  )
}

export default App
