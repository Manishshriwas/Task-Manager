// routes/todoRoutes.js
import express from "express";
import Todo from "../models/Todo.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a todo
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await Todo.create({
      text,
      user: req.user.id, // linked to logged in user
    });
    res.json({ success: true, todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get todos of the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json({ success: true, todos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Toggle todo completion status
router.patch("/:id/toggle", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.id });
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.json({ success: true, todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete todo
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    res.json({ success: true, message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
