import React, { useEffect, useState } from 'react'
import Todoitem from './Todoitem'
import styles from "./Todo.module.css"

const Todo = () => {
  const [todolist,setTodolist]=useState([]);
  const [todo,setTodo]=useState("");
   
  const handleadd=()=>{
     
      let arr=[...todolist,todo];
      setTodolist(arr);
      setTodo("")
  }
  const deletetodo=(value)=>{
     setTodolist(todolist.filter((todo)=>todo!==value))
  }
  return (
    <div  className={styles.tododiv}>
        <Todoitem value={todolist}  deletetodo={deletetodo} />
        <h1>Todo Application</h1>
        <input type="text" placeholder='write something' value={todo} onChange={({target})=>setTodo(target.value)}/>
        <button onClick={handleadd}>+</button>
    </div>
  )
}

export default Todo