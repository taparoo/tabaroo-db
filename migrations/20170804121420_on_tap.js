exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("on_tap", table => {
    table.integer("beer_one_id").references("beer.id").unsigned().onDelete("cascade");
    table.integer("beer_two_id").references("beer.id").unsigned().onDelete("cascade");
    table.integer("cooler_beer_id").references("beer.id").unsigned().onDelete("cascade");


  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("on_tap");
};
