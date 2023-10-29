import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState(""); // State to manage the new todo input

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo(""); // Clear the input field after adding a new todo
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, updatedText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 via-blue-100 to-indigo-300">
      <h1 className="font-bold mb-3 font-mono ">TODO APP</h1>
      <div className="flex mb-3">
        <input
          id="newTodo"
          type="text"
          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ms-2" onClick={addTodo}>
          Submit
        </button>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
};

export default App;
