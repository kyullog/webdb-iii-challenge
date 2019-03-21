const express = require("express");
const cohortsRouter = express.Router();
const db = require("../data/helpers/cohortHelpers.js");
const uppercaser = require("../middleware.js");

cohortsRouter.use(uppercaser);

cohortsRouter.get("/", async (req, res) => {
  try {
    const cohorts = await db.get();
    res.status(200).json(cohorts);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "There was a problem retrieving the cohorts" });
  }
});

cohortsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const cohort = await db.getById(id);
    res.status(200).json(cohort);
  } catch {
    res
      .status(500)
      .json({ error: "An error occured while retrieving the cohort" });
  }
});

cohortsRouter.get("/:id/students", async (req, res) => {
  const id = req.params.id;
  try {
    const students = await db.getStudentsByCohort(id);
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occured while retrieving the cohort" });
  }
});

cohortsRouter.post("/", async (req, res) => {
  const addition = req.body;
  try {
    const success = await db.insert(addition);
    res.status(201).json(success);
  } catch {
    res.status(500).json({ error: "There was a problem adding your cohort" });
  }
});

cohortsRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body;
  try {
    const updated = await db.update(id, name);
    if (updated) {
      res.status(201).json({ message: "Cohort was updated" });
    } else {
      res.status(400).json({
        error: "Please make sure you are using the correct id and name field"
      });
    }
  } catch {
    res.status(500).json({ error: "There was a problem updating the cohort" });
  }
});

cohortsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await db.remove(id);
    res.status(201).json({ message: "Cohort deleted" });
  } catch {
    res.status(500).json({ error: "There was a problem deleting your cohort" });
  }
});

module.exports = cohortsRouter;
