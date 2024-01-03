import React, { useState } from 'react'
function ToDoList() {

    const [tasks, setTasks] = useState(["learn", "study", "walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)

    }
    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }




    return (
        <div className='to-do-list'>

            <h1>To Do List</h1>

            <div>
                <input type='text' placeholder='Add new Task:' value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleEnterKey} />

                <button className='add-button'
                    onClick={addTask}>Add Task</button>



            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>

                        <button className='delete-button'
                            onClick={() => deleteTask(index)}>
                            Delete</button>

                        <button className='move-up-button'
                            onClick={() => moveTaskUp(index)}>
                            UP</button>

                        <button className='move-down-button'
                            onClick={() => moveTaskDown(index)}>
                            DOWN</button>

                    </li>)}

            </ol>


        </div>




    );

}
export default ToDoList