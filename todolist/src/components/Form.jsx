import React, {useState} from 'react';
import Task from './Task';

const Form = (props) => {

    const [list, setList] = useState([]);
    const [task, setTask] = useState({
        name: "",
        isComplete : false
    });

    const onChange = (event) => {
        console.log(event.target.name);
        setTask({
            name: event.target.value,
            isComplete: false
        });
    }
    
    const createTask = (event) => {
        event.preventDefault();
        setList([...list, task]);
        console.log(list);
        setTask({name: "",
        isComplete : false})
    }

    const toggleComplete = (selectedIdx) => {
        //We make a copy of the list by making a copy of the array and the mutating the state
        const copyList = [...list];
        const selectedItem = copyList[selectedIdx];
        selectedItem.isComplete === true ? selectedItem.isComplete = false : selectedItem.isComplete = true;
        setList(copyList);
    }

    const deleteTask = (selectedIndex) => {
        //we filter through the array of taks, to only return the ones who index number doesn't match the index(i) 
        let revisedList = list.filter((task, i) => {
            return i !== selectedIndex;
        })
        //update new list
        setList(revisedList);
    }

    return (
        <div>
            <form onSubmit={(event) => createTask(event)}>
                <div>
                    <label>Add Task:</label>
                    <input onChange={onChange} name="task" type="text" value={task.name}/>
                    <button type="submit">Add</button>
                </div>
            </form>
            <div>
                {
                    list.map((task, i) => {
                        return (
                            <Task task={task} toggleComplete={() => toggleComplete(i)} deleteTask={() => deleteTask(i)}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Form;