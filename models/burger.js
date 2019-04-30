// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");
// burger is the name of the table NOT the database
let burger = {
  all: function(cb) {
    //looking for the name of the table here
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  //looking for the name of the table here
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    //looking for the name of the table here
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    //looking for the name of the table here
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
