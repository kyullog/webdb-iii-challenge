const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  insert
};

function get() {
  return db("students")
    .select("students.id", "students.name", "cohorts.name as cohort")
    .leftJoin("cohorts", "students.cohort_id", "cohorts.id");
}

function getById(id) {
  return db("students")
    .select("students.id", "students.name", "cohorts.name as cohort")
    .innerJoin("cohorts", "students.cohort_id", "cohorts.id")
    .where({ "students.id": id })
    .first();
}

function insert(student) {
  return db("students")
    .insert(student)
    .then(ids => {
      return getById(ids[0]);
    });
}
