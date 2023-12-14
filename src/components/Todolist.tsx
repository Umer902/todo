import React, { useState } from 'react'


/*function Todo() {
  const [task, settask] = useState("")
  function handletaskChange(e) {
    settask(e.target.value);
  }
  const handleAddTodos = () =>{
    if(task !==""){
      const newTodo = {
        id:Date.now(),
        text:task,
        completed:false
  constTodos = () => {
   return  
  };
      
  const handleToggleChange =(id) => {
const updatedTodos - updatedTodos.map((todo)=>{
  if (todo.id ===id){
    return{...todo, completed:todo.completed}
  }
  return Todo;
})

  setTodos(updatedTodos);
  }
      }}}
  
  return (
  <div>
    <h1 className='justify-center bg-gray-400 gap-3 p-3'>TODO PROJECT </h1>
    <input 
    type='text'
    value ={task}
    placeholder='Enter your Task'
    onChange = {handletaskChange}
    />
    <button className='bg-gree-300 px-4 py-3 '> Add Task </button>
  <ul className="Todo-list">
  {todos.map((todo)=>(
    <li className=''>
      < input  
      type="cheekbox"
      onChange ={()=> handleToggleChange(todo.id)}
      />
      <span>{todo.test}</span>
      <button onClick={()=> handleRemoveTodo(todo.id)}>Romove</button>
      </li>
  ))}
      </ul>
  </div>
  </div>
  )
}
export default Todo;