import React from 'react'
import Todolist from './Todolist'

const Todoitem = ({value,deletetodo}) => {
    
  return (
    <div>
     { value.map((todo)=>{
         return  <Todolist value={todo} deletetodo={deletetodo}/>
     })}
       
    </div>
  )
}

export default Todoitem