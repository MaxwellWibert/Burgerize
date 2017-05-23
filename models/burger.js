var orm = require("../config/orm.js");


module.exports = {
   get: function(cb){
      return orm.selectAll(cb);
   },
   create: function(burger_name, cb){
      return orm.insertOne("burger_name", burger_name, cb);
   },

   eat: function(id, cb){
      return orm.updateOne(id, "devoured", true, cb);
   },

   rename: function(id, newName, cb){
      return orm.updateOne(id, "burger_name", newName, cb);
   }
}
