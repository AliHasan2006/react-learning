import React from 'react'
import useCartContext from '../contexts/cartContext'
function FetchData() {

const {items} = useCartContext()
  return (
    <div>
     <h2>Item: {items}</h2>
    </div>
  )
}

export default FetchData