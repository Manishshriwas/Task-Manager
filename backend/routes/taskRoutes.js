import express from 'express'
import Task from '../models/task.js'

const router=express.Router();

//Get all todos
router.get('/',async(req,res)=>{
    try{
      const tasks=await Task.find();
      res.json(tasks);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// Add a new todo
router.post("/", async (req, res) => {
  const tasks = new Task({
    text: req.body.text,
  });
  try {
    const newTask = await tasks.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo (text and/or completed)
router.patch("/:id", async (req, res) => {
  try {
    const tasks = await Task.findById(req.params.id);
    if (!tasks) return res.status(404).json({ message: "Task not found" });

    if (req.body.text !== undefined) {
      tasks.text = req.body.text;
    }
    if (req.body.completed !== undefined) {
      tasks.completed = req.body.completed;
    }

    const updatedTodo = await tasks.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
