var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8080,
  user: 'root',
  password:'""',
  database: 'burger'
});

connection.connect(function (err){
  if (err)  {
    console.error('error connecting:' + err.stack);
    return;
  }
  console.log('Connected as id' + connection.threadId);
});

module.exports = connection;