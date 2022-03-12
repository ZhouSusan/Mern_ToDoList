import React from "react";

const Task = (props) => {

    return (
        <div style={{textDecoration: props.task.isComplete ? "line-through": "initial"}}>{props.task.name}
            <label>
                <input type="checkbox" onClick={() => props.toggleComplete()}/>
            </label>
            <button onClick={() => props.deleteTask()} type="submit">Delete</button>
        </div>
    )
}

export default Task;