
export function TodoApp(){
    return (
        <>
            <h1>Todo App</h1>
            <input type="text" />
            <button>Add Todo</button>

            <h2>List of todos</h2>
            <ul>
                <li>
                    Learn React
                    <button>Done</button>
                    <button>Delete</button>
                </li>
            </ul>
        </>
    )
}