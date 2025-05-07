const mysql = require('mysql2');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

// Koneksi ke database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_db"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Koneksi database berhasil");
});

// Halaman utama - tampilkan semua data dari tabel kasir
app.get("/", (req, res) => {
  const query = "SELECT * FROM kasir";
  con.query(query, (err, results) => {
    if (err) throw err;
    const data = JSON.parse(JSON.stringify(results));

    const totalHarga = data.reduce((acc, item) => acc + item.harga, 0);

    res.render("index", { data: data, 
      title: "Selamat datang di aplikasi kasir",
      data: data, 
      total: totalHarga,
    });
  });

});

// Proses pencarian berdasarkan kode_barang
app.post("/search", (req, res) => {
  const kode = req.body.namaBarang;
  const query = "SELECT * FROM kasir WHERE kode_barang LIKE ?";
  con.query(query, [`%${kode}%`], (err, results) => {
    if (err) throw err;

    const data = JSON.parse(JSON.stringify(results));

    // Hitung total harga dari hasil pencarian
    const totalHarga = data.reduce((acc, item) => acc + item.harga, 0);

    res.render("index", { 
      data: data, 
      total: totalHarga,
      title: `Hasil pencarian untuk kode: ${kode}` 
    });

  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
