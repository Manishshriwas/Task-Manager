const API_URL = "/api";

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const registerUser = async (name, email, password) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
};

export const getTodos = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const addTodo = async (text) => {
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
};

export const toggleTodo = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/todos/${id}/toggle`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
