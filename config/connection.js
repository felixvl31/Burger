// Set up MySQL connection.
var mysql = require("mysql");

//Local Connection
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

//Heroku Connection
var connection = mysql.createConnection({
  host: "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "tnnux3w56d8nudob",
  password: "z2jyj7z7kyest94z",
  database: "r0wzsa2ugwp91dqb"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
