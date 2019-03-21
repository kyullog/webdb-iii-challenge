exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { id: 1, name: "Jim", cohort_id: 2 },
        { id: 2, name: "Jon", cohort_id: 3 },
        { id: 3, name: "Joe", cohort_id: 1 },
        { id: 4, name: "Jill", cohort_id: 2 }
      ]);
    });
};
