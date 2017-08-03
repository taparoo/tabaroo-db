
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("beer", table => {
    table.increments("id");
    table.string("name");
    table.string("type");
    table.string("brewery");
    table.float("abv", [2]);
    table.string("bar");
    table.integer("user_id").references("user.id").unsigned().onDelete("cascade");
    table.text("description");
    table.text("image_url").defaultTo("http://www.beertastes.com/img/beericon.png");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("beer");
};
