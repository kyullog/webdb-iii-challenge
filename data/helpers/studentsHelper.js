const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
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

function update(id, student) {
  return db("students")
    .update(student)
    .where({ id });
}

function remove(id) {
  return db("students")
    .where({ id })
    .del();
}
