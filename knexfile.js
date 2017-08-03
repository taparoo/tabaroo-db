

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/taperoo"
  },
  production: {
  client: "pg",
  connection: process.env.DATABASE_URL
}
};
