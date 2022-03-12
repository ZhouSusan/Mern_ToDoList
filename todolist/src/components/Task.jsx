import React from "react";

const Task = (props) => {

    return (
        <div style={{textDecoration: props.isComplete ? "line-through": "initial"}}>{props.name}
            <label>
                <input type="checkbox" onClick={() => props.toggleComplete()}/>
            </label>
            <button onClick={() => props.deleteTask()} type="submit">Delete</button>
        </div>
    )
}

export default Task;