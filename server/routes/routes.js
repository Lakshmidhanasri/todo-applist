const express = require("express");
const Task = require("../models/models");
const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find(); // Await the result of the find operation
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

// POST a new task
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save(); // Await the save operation
    res.json(savedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving task" });
  }
});

// PUT (update) a task by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } // Return the updated document
    );
    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating task" });
  }
});

// DELETE a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id); // Await the delete operation
    res.json(deletedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting task" });
  }
});

module.exports = router;
