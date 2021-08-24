import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodoAction } from "../store/action";
export default function TodoApp(){
    const todos = useSelector(state => state.todos);
    const todoRef = React.createRef();
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(addTodoAction(todoRef.current.value));
        todoRef.current.value = "";
    }

    return (
        <>
            <h1>Todo App</h1>
            <input type="text" ref={todoRef} />
            <button onClick={addTodo}>Add</button>

            <h2>List of todos</h2>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button>Done</button>
                            <button>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}