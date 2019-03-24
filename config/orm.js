// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString,[tableInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
  },
  create: function(tableInput, col, val, cb) {
   var queryString = "INSERT INTO ?? (??) VALUES (?)";
      connection.query(queryString,[tableInput,col,val], function(err, result) {
        if (err) throw err;
        cb(result);
      });
  },
  update: function(tableInput,col,val,condCol,condVal,cb) {
    var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
    connection.query(queryString,[tableInput,col,val,condCol,condVal], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  delete: function(tableInput, condCol,condVal, cb) {
    var queryString = "DELETE FROM ?? WHERE ??=?";
    connection.query(queryString,[tableInput,condCol,condVal], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
