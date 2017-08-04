
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('on-tap').del()
    .then(function () {
      // Inserts seed entries
      return knex('on-tap').insert([
        {
          "beer_one_id": 2,
          "beer_two_id": 1,
          "cooler_beer_id": 5
        }
      ]);
    });
};
