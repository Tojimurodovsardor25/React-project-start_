import React from "react";
import TodoList from "./Todo/TodoList";
import "./App.css";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: " Barcelona" },
    { id: 2, completed: true, title: " Liverpol" },
    { id: 3, completed: false, title: " Chelsea" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1>React tutorial</h1>
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
