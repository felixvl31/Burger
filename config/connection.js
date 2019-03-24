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
// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-03.cleardb.net",
//   user: "ba3bc920b5c303",
//   password: "04d51ce8",
//   database: "heroku_6a34609d9f1730b"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });


var db_config = {
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "ba3bc920b5c303",
  password: "04d51ce8",
  database: "heroku_6a34609d9f1730b"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); 

  connection.connect(function(err) {            
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }
                                         
  });                                     

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

// Export connection for our ORM to use.
module.exports = connection;
