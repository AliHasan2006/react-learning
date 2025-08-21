import React from 'react'
import useCartContext from '../contexts/cartContext'
function AddBtn() {
  const {addItems} = useCartContext();
    const addBtn = () =>{
  addItems();
    }
  return (
    <div>
        <button onClick={addBtn}>Add Items</button>

    </div>
  )
}

export default AddBtn