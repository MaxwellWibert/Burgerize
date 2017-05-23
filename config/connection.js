var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Sdfjkl3ed",
  database: "burgers_db"
});

connection.connect(err=>{
   if(err) {
   	console.error("error connecting: " + err.stack);
   	return
   }
   console.log("Connected as " + connection.threadId);
})

module.exports = connection;
