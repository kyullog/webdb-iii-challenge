const express = require("express");
const cohortsRouter = express.Router();
const db = require("../data/helpers/cohortHelpers.js");

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

module.exports = cohortsRouter;
