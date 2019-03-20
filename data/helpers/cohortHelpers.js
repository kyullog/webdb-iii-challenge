const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  // getStudentsByCohort,
  // update,
  insert
  // remove
};

function get() {
  return db("cohorts");
}

function getById(id) {
  return db("cohorts")
    .where({ id })
    .first();
}

// function getStudentsByCohort(id) {
//   return db.from('students')
// }

function insert(cohort) {
  return db("cohorts")
    .insert(cohort)
    .then(ids => {
      return getById(ids[0]);
    });
}
