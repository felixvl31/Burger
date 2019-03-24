// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(col, val, cb) {
    orm.create("burgers", col, val, function(res) {
      cb(res);
    });
  },
  update: function(col,val,condCol,condVal, cb) {
    orm.update("burgers", col,val,condCol,condVal, function(res) {
      cb(res);
    });
  },
  delete: function(condCol,condVal, cb) {
    orm.delete("burgers", condCol,condVal, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
