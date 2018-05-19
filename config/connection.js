var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3310,
  user: 'root',
  password:'',
  database: 'burgers'
});

connection.connect(function (err){
  if (err)  {
    console.error('error connecting:' + err.stack);
    return;
  }
  console.log('Connected as id' + connection.threadId);
});

module.exports = connection;