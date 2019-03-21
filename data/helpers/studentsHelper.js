const db = require("../dbConfig.js");

module.exports = {
  get,
  getById
};

function get() {
  return db("students")
    .select("students.id", "students.name", "cohorts.name as cohort")
    .innerJoin("cohorts", "students.cohort_id", "cohorts.id");
}

function getById(id) {
  return db("students")
    .select("students.id", "students.name", "cohorts.name as cohort")
    .innerJoin("cohorts", "students.cohort_id", "cohorts.id")
    .where({ "students.id": id })
    .first();
}
