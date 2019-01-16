const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.delete('/rest/articulos', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `Articulos` WHERE `Id_Articulo`=?', [req.body.Id_Articulo], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
});

app.listen(4189, function () {
 console.log('Node app is running on port 4189');

});