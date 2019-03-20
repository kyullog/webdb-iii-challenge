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

function getByID(id) {
  return db("cohorts")
    .where({ id })
    .first();
}

// function getStudentsByCohort(id) {
//   return db.from('students')
// }
