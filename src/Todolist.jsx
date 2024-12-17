import { useState } from "react";
import './Todolist.css'

const Todolist = () => {
    const [todo, settodo] = useState([]);
    const [newtodo, setnewtodo] = useState('');

    const handleSubmit = () => {
        if (!newtodo == "") {
            settodo([...todo, newtodo.trim()]);
            setnewtodo('');
        }

    }

    const deleteHandler = (index) => {
        const deletetodo = todo.filter((_, i) => i !== index);
        settodo(deletetodo)
    }

    const moveUpHandler = (index) => {
        if (index > 0) {
            const updateTasks = [...todo];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            settodo(updateTasks)

        }
    }
    const downUpHandler = (index) => {
        if (index < todo.length-1 ) {
            const updateTasks = [...todo];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            settodo(updateTasks)

        }
    }
    return (
        <div className="">
          <center>
        <div style={{marginBottom:'20px'}}>
        <p>Count:{ todo.length }</p>
            <h1>Todolist</h1>
            <input type="text" value={ newtodo } onChange={ (e) => setnewtodo(e.target.value) } name="" placeholder="Enter the todo" id="" />
            <button id="btn2" onClick={ handleSubmit }>Add</button>
        </div>
          </center>
            {
                todo.map((item, index) => (
                   <div className="todolist-main" key={ index }>
                     <div className="todo-list" >
                       <div style={{width:'70px'}}>
                       <h2 className="item-name">{ item }</h2>
                       </div>
                        <div>
                        <button id="btn" onClick={ () => deleteHandler(index) } >DELETE</button>
                        <button className="btn1" onClick={ () => moveUpHandler(index) }>👆</button>
                        <button className="btn1" onClick={ () => downUpHandler(index) }>👇</button>
                        </div>
                    </div>
                   </div>
                ))
            }
        </div>
    )
};

export default Todolist;