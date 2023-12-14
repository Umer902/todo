"use client"
import React, { useState } from "react"


function TodoAssign() {

    const [task, settask] = useState<any>  ("")
    const [Todo, setTodo] = useState<any> ([])

    function handletaskChange (e:any) {
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
    const handleToggleChange =(id:number) => {
        const updatedTodos = Todo.map((Todo:any) => {if (Todo.id ===id){
            return {...Todo, completed:!Todo.completed};
        }
            return Todo;
        })
        setTodo(updatedTodos);
    };

    const handleRemoveTodo = (id:number) => {
        const updatedTodo = Todo.filter((Todo:any)=> Todo.id !==id);
        setTodo(updatedTodo);
    }

  return (
 <>
    <h1 className="flex align-middle justify-center bg-blue-500 text-3xl font-bold text-white p-5">TODO ASSIGNMENT </h1>
    <div className="flex align-middle justify-center border-separate p-5 ">
    <input type = "text"value = {task} 
    placeholder= "Enter your task" onChange={handletaskChange} />
    <button className=" align-bottom bg-gray-500 px-3" 
    onClick={handleAddTask}> Add Task</button>
 
 <ul className="">
    {Todo.map((Todo:any) => ( 
        
        <li className= {`todo-item ${Todo.completed == true ? "completed": ""}`}>
        <input type="checkbox" onChange={() => 
        handleToggleChange(Todo.id)} 
        />
        <span className="">{Todo.text }</span>
        <button onClick={()=> handleRemoveTodo (Todo.id)}> Remove </button>
        </li>
        ))}
    </ul>   
    </div>
    </>
    )
}

export default TodoAssign;