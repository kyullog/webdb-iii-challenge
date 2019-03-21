const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  getStudentsByCohort,
  update,
  insert,
  remove
};

function get() {
  return db("cohorts");
}

function getById(id) {
  return db("cohorts")
    .where({ id })
    .first();
}

function getStudentsByCohort(id) {
  return db
    .select("students.name")
    .from("students")
    .where({ cohort_id: id })
    .innerJoin("cohorts", "students.cohort_id", "cohorts.id");
}

function update(id, newName) {
  return db("cohorts")
    .where({ id })
    .update(newName);
}

function insert(cohort) {
  return db("cohorts")
    .insert(cohort)
    .then(ids => {
      return getById(ids[0]);
    });
}

function remove(id) {
  return db("cohorts")
    .where({ id })
    .del();
}
