var connection = require("./connection.js");

orm = {
   selectAll: function(cb){
      connection.query("SELECT * FROM burgers ORDER BY id", (err, result)=>{
         if(err) console.error(err)
         else{
            console.log(`${result.length} rows successfully selected`);
            return cb(result);
         }
      });
   },

   insertOne: function(colKey, colVal, cb){
      connection.query("INSERT INTO burgers (?) VALUES (?)", [colKey, colVal], (err, result)=>{
         if(err) console.error(err);
         return cb(result);
      });
   },
   updateOne: function(id, colName, colVal, cb){
      connection.query("UPDATE burgers SET ? = ?? WHERE id = ?", [colname, colVal, id], (err, result)=>{
         if(err) console.error(err)
         else console.log(`Row with id ${id} has updated ${colName} to a value of ${colVal}`);
         return cb(result);
      });
   }
}

module.exports = orm;