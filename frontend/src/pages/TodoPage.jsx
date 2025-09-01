import { useState, useEffect } from "react";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "../api";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    console.log("Fetched todos:", data); // Debug
    setTodos(data.todos || []); // ✅ fix here
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text) return;
    await addTodo(text);
    setText("");
    fetchTodos();
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleAdd} className="flex mb-4">
        <input
          className="flex-1 border rounded-l p-2"
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">
          Add
        </button>
      </form>

      <div className="space-y-2">
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={async () => {
                await toggleTodo(todo._id);
                fetchTodos();
              }}
              onDelete={async () => {
                await deleteTodo(todo._id);
                fetchTodos();
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default TodoPage;
