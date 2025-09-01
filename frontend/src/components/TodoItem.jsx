// src/components/TodoItem.jsx
import { FaTrash, FaCheck } from "react-icons/fa";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-3 rounded-lg mb-2">
      <div
        onClick={() => onToggle(todo._id)}
        className={`flex items-center gap-2 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        <FaCheck
          className={`${
            todo.completed ? "text-green-500" : "text-gray-300"
          }`}
        />
        <span>{todo.text}</span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  );
}
