import React from "react";
import "./App.css";

const App = () => {
    /* hooks with todo(s) as getter & and setTodo(s) as setters */
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");

    /* handle new newTodo items */
    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            /* properties */
            id: new Date().getTime(),
            text: todo.trim(),
            completed: false,
        };
        if (newTodo.text.length > 0) {
            /* setter with spread syntax */
            setTodos([...todos].concat(newTodo));           
            setTodo("");
        }   else {
            
            alert("Enter Valid Task");
            setTodo("");
        }
    }

    return (
            <div id="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo) => <div className="todo" key={todo.id}>
                <div>{todo.text}</div>
            </div>)}
            </div>
    );
};

export default App;
