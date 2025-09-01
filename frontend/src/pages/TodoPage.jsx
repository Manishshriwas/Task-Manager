import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "../api";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchTodos();
  }, [navigate]);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      console.log("Fetched todos:", data); // Debug
      if (data.message) {
        alert(data.message);
        return;
      }
      setTodos(data.todos || []); // ✅ fix here
    } catch (error) {
      console.error("Error fetching todos:", error);
      alert("Failed to fetch todos. Please try again.");
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text) return;
    try {
      const result = await addTodo(text);
      if (result.message) {
        alert(result.message);
        return;
      }
      setText("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add todo. Please try again.");
    }
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
