const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

pool.getConnection(function(err, conn) {
  pool.releaseConnection(conn);
})
module.exports = pool;