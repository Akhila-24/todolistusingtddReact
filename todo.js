import React, { useState } from "react";
import './styling.css'
const Todo = () => {
    const [task,setTask]=useState('')
    const [tasks,AddTask]=useState([])
    const [ability,setAbility]=useState(true);
    

    function AddNewTask()
    {
        AddTask((previous)=>[...previous,task])
        setTask('')
      
        
    }
    function ChangeTask(e)
    {
        setTask(e.target.value)
        setAbility(false)
    }
      
    
    function RemoveAllTasks()
    {
        AddTask([])
    }

    function DeleteTask(index)
    {
        const modified=tasks.filter((value,ind)=>{
            return ind!=index
        })
        AddTask(modified)
    }
    
    return <div>
        <h1>Todo List</h1>
        <input data-testid='input' placeholder="Enter task here" onChange={ChangeTask} value={task}/>
        <button id='removeall' disabled={ability} onClick={RemoveAllTasks}>RemoveAll</button>

        
        <button id="add" onClick={AddNewTask}>Add task</button>
        <div data-testid="display">
            {
            tasks.map((Task,ind)=>
            <>
            <li>{Task}</li>
            <button className="danger" onClick={()=>DeleteTask(ind)}>Delete</button>
            </>
               
            )
    }

        </div>
        </div>
}
export default Todo;