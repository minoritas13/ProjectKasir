const mysql = require('mysql2');
const express = require('express');


const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set('views', "views");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "datagedungbulutangkis"
});

con.connect((err) => {
  if (err) throw err
  console.log("konek");

  const querry = "SELECT * FROM datagedung"
  con.query(querry, function (err, results){
    const data = JSON.parse(JSON.stringify(results));
    app.get("/", (req, res) => {
      res.render("index", {data:data, title: "Data Gedung Bulutangkis" });
    });
  });
   
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
