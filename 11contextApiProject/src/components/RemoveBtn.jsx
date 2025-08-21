import React from 'react'
import useCartContext from '../contexts/cartContext'
function RemoveBtn() {
   const {rmvItems}= useCartContext()
     const rmvBtn = () =>{
      rmvItems();
    }
  return (
    <div>
        <button onClick={rmvBtn}>Remove Items</button>
    </div>
  )
}

export default RemoveBtn