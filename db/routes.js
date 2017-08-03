const express = require("express");
const router = express.Router();
const queries = require("./db/queries");
const bcrypt = require("bcryptjs");

router.get("/beers", (req, res) => {
  queries.getAll("beer").then(beers => res.json(beers));
});

router.get("/user", (req, res) => {
  queries.getAll("user").then(users => res.json(users));
});

module.exports = router;
