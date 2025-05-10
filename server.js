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

app.get("/", (req, res) => {
    res.render("index", { 
      title: "Selamat datang di aplikasi", 
    });
});

const keranjang = [];

app.post("/tambah-barang", (req, res) => {
  const { nama_barang, jumlah } = req.body;
  const qty = parseInt(jumlah);

  // Ambil harga dari database berdasarkan nama_barang
  const query = "SELECT harga_barang FROM kasir WHERE nama_barang = ?";
  con.query(query, [nama_barang], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const harga = parseFloat(results[0].harga_barang);

      // Simpan ke array keranjang
      keranjang.push({
        nama_barang,
        harga_barang: harga,
        jumlah: qty,
        total: harga * qty
      });

      res.redirect("/keranjang");
    } else {
      res.send("Barang tidak ditemukan di database.");
    }
  });
});


app.get("/keranjang", (req, res) => {
  const totalSemua = keranjang.reduce((sum, item) => sum + item.total, 0);
  res.render("index", {
    keranjang,
    total: totalSemua,
    title: "Keranjang Belanja"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
