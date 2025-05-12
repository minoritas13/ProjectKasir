const mysql = require('mysql2');
const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

con.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err.message);
  } else {
    console.log("Koneksi database berhasil");
  }
});

const keranjang = [];

hitungDiskon = (total) => {
  let diskon = 0;

  if (total >= 100000) {
    diskon = total * 0.10; // 10%
  } else if (total >= 50000) {
    diskon = total * 0.05; // 5%
  }

  const totalSetelahDiskon = total - diskon;

  return {
    diskon,
    totalSetelahDiskon
  };
}

app.get("/", (req, res) => {
  res.render("index", { 
    title: "Selamat datang di aplikasi",
  });
});

app.post("/tambah-barang", (req, res) => {
  const { nama_barang, jumlah } = req.body;
  const qty = parseInt(jumlah);

  const query = "SELECT harga_barang FROM kasir WHERE nama_barang = ?";
  con.query(query, [nama_barang], (err, results) => {
    if (err) return res.send(" Gagal mengambil data: " + err.message);

    if (results.length > 0) {
      const harga = parseFloat(results[0].harga_barang);

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
  const {totalSetelahDiskon} = hitungDiskon(totalSemua);

  res.render("index", {
    keranjang,
    total: totalSetelahDiskon,
    title: "Keranjang Belanja"
  });

});

app.get("/keranjang/reset", (req, res) => {
  keranjang.length = 0;
  res.redirect("/keranjang");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
