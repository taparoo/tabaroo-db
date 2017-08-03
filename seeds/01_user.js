const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user").del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          "first_name": "Dan",
          "last_name": "Beerman",
          "email": "beerman@galvanize.com",
          "password": bcrypt.hashSync("password"),
          "campus": "Platte",
          "is_admin": true
        }, {
          "first_name": "Rob",
          "last_name": "Puls",
          "email": "rpu1s@sbcglobal.net",
          "password": bcrypt.hashSync("password"),
          "campus": "Platte",
          "is_admin": true
        }, {
          "first_name": "Jason",
          "last_name": "Clifton",
          "email": "j.clifton1473@gmail.com",
          "password": bcrypt.hashSync("password"),
          "campus": "Platte",
          "is_admin": true
        }, {
          "first_name": "Austin",
          "last_name": "Johnson",
          "email": "joha0033@gmail.com",
          "password": bcrypt.hashSync("password"),
          "campus": "Platte",
          "is_admin": true
        }, {
          "first_name": "Michael",
          "last_name": "Balagna",
          "email": "lunchmeat13@gmail.com",
          "password": bcrypt.hashSync("password"),
          "campus": "Platte",
          "is_admin": true
        },
      ]);
    });
};
