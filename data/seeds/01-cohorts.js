exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { id: 1, name: "WEBPT3" },
        { id: 2, name: "DS21" },
        { id: 3, name: "IOS5" }
      ]);
    });
};
