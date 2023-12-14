
import React, { useState } from "react"


function TodoAssign() {

    const [task, settask] = useState  ("")
    const [Todo, setTodo] = useState ([])

    function handletaskChange (e) {
        settask(e.target.value);   
    }
    function handleAddTask (){
        if (task !== ""){
            const NewTodo = {
                id :  Date.now(),
                text : task,
                completed: false,
            }
    setTodo([...Todo, NewTodo]);
    settask ("");
        }
    }
    const handleToggleChange =(id) => {
        const updatedTodos = Todo.map((Todo) => {if (todo.id ===id){
            return {...todo, completed:!todo.completed};
        }
            return todo;
        })
        setTodo(updatedTodo);
    };

    const handleRemoveTodo = (id) => {
        const updatedTodo = Todo.filter((todo)=> todo.id !==id);
        setTodo(updatedTodo);
    }

  return (
 <>
    <h1 className="flex align-middle justify-center bg-blue-500 text-white">TODO ASSIGNMENT </h1>
    <div className="flex align-middle rounded-lg justify-center p-5 py-4">
    <input type = "text"value = {task} 
    placeholder= "Enter your task" onChange={handletaskChange} />
    <button className="flex justify-end p-5 px-3 py-4" 
    onClick={handleAddTask}> Add Task</button>
 <ul className="Todo-list">
    {Todo.map((Todo) => ( 
        
        <li className= {`todo-item ${Todo.completed == true ? "completed": ""}`}>
        <input type="checkbox" onChange={() => 
        handleToggleChange(Todo.id)} 
        />
        <span className="flex flex-col">{Todo.text }</span>
        <button onClick={()=> handleRemoveTodo (Todo.id)}> Remove </button>
        </li>
        ))}
    </ul>   
    </div>
    </>
    )
}

export default TodoAssign