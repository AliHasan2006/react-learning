import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <div className='text-center mt-10 bg-gray-500 h-24 flex items-center justify-center text-4xl bold'>User: {userid}</div>
  )
}

export default User