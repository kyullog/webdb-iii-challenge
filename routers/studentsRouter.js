const express = require("express");
const studentsRouter = express.Router();
const db = require("../data/helpers/studentsHelper.js");

studentsRouter.get("/", async (req, res) => {
  try {
    const students = await db.get();
    res.status(200).json(students);
  } catch {
    res.status(500).json({ error: "There was a problem retrieving students" });
  }
});

studentsRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await db.getById(id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "There was a problem retrieving the student" });
  }
});

studentsRouter.post("/", async (req, res) => {
  try {
    const success = await db.insert(req.body);
    res.status(201).json(success);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem adding the student" });
  }
});

studentsRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await db.update(id, req.body);
    res.status(201).json(updated);
  } catch {
    console.log(err);
    res
      .status(500)
      .json({ error: "There was a problem updating the student entry" });
  }
});

module.exports = studentsRouter;
