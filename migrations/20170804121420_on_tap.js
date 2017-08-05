exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("on-tap", table => {
    table.increments("id");
    table.integer("beer_id").references("beer.id");
    table.string("tap");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("on-tap");
};
