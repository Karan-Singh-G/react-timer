import React from 'react'
import styles from "./Todolist.module.css";

const Todolist = ({value,deletetodo}) => {
  console.log(value)
  const  delelted=()=>{
  
  }
  return (
    <div className={styles.listdiv}>
    
     {value}
    <button onClick={()=>deletetodo(value)}>x</button>
     
    </div>
  )
}

export default Todolist