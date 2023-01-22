const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: "131004",
  port: 5432,
});

module.exports = pool;

