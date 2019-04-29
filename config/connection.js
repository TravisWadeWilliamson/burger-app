// Set up MySQL connection.
let mysql = require("mysql");

let connection_MySQL = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2t@EkrD!zm^.^b.b",
  database: "burgers_db"
});

// Make connection.
connection_MySQL.connect(function(err) {
  if (err) {
    console.error(`Error connecting to MySQL ${err.stack}`);
    return;
  }
  console.log(`Connected to MySQL as id ${connection_MySQL.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection_MySQL;
