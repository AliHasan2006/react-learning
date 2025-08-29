import {useSelector} from 'react-redux'
import React from 'react'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
   const todos = useSelector(state => state.todos)
  return (
    <div>Todos</div>
  )
}

export default Todos