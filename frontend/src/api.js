// Local development URL (commented out)
// const API_URL = "http://localhost:8000/api";

// Production backend URL (Render deployment)
const API_URL = "https://task-manager-backend1-s3o1.onrender.com/api";

export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Network error. Please check your connection." };
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return res.json();
  } catch (error) {
    console.error("Registration error:", error);
    return { message: "Network error. Please check your connection." };
  }
};

export const getTodos = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/todos`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  } catch (error) {
    console.error("Get todos error:", error);
    return { todos: [], message: "Network error. Please check your connection." };
  }
};

export const addTodo = async (text) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });
    return res.json();
  } catch (error) {
    console.error("Add todo error:", error);
    return { message: "Network error. Please check your connection." };
  }
};

export const toggleTodo = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/todos/${id}/toggle`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  } catch (error) {
    console.error("Toggle todo error:", error);
    return { message: "Network error. Please check your connection." };
  }
};

export const deleteTodo = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  } catch (error) {
    console.error("Delete todo error:", error);
    return { message: "Network error. Please check your connection." };
  }
};
