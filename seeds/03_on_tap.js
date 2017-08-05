
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('on-tap').del()
    .then(function () {
      // Inserts seed entries
      return knex('on-tap').insert([
        {
          "beer_id": 1,
          "tap": "left"
        }, {
          "beer_id": 2,
          "tap": "right"
        }, {
          "beer_id": 3,
          "tap": "cooler"
        },
      ]);
    });
};
