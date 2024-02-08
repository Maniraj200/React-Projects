import { useState } from "react";
import './ToDoList.css';

export function ToDoList(){

    const [tasks , SetTasks] = useState([]);
    const [newTask , SetNewTask] = useState("");

    const handleInputChange = (event) =>{
        SetNewTask(event.target.value);
    }
    const handleAddTask = () =>{
        if(newTask.trim() !== ""){
            SetTasks(t => [...t , newTask])
            SetNewTask("");
        }
    }
    const handleDeleteTask = (index) =>{
         const updatedTask = tasks.filter((_ , i) => i!==index);
         SetTasks(updatedTask);
    }
    const handleMoveUpTask = (index) =>{
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index] , updatedTask[index-1]] = [updatedTask[index-1] , updatedTask[index]];
            SetTasks(updatedTask);
        }
    }
    const handleMoveDownTask = (index) =>{
        if(index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index] , updatedTask[index+1]] = [updatedTask[index+1] , updatedTask[index]];
            SetTasks(updatedTask);
        }
    }

    return(
        <div className="todo-container">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                className="add-button" 
                onClick={handleAddTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task , index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                    className="delete-button"
                    onClick={() =>handleDeleteTask(index)}>
                        Delete
                    </button>
                    <button 
                    className="move-button"
                    onClick={() =>handleMoveUpTask(index)}>
                        Move Up
                    </button>
                    <button 
                    className="move-button"
                    onClick={() =>handleMoveDownTask(index)}>
                        Move Down
                    </button>
                </li>
                )}
            </ol>
        </div>
    )
} 