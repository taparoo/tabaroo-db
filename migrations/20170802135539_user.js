
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("user", table => {
    table.increments("id");
    table.string("first_name").notNull();
    table.string("last_name").notNull();
    table.string("email").unique().notNull();
    table.string("password").notNull();
    table.string("campus");
    table.boolean("is_admin").defaultTo(false).notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
