-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 07 Bulan Mei 2025 pada 15.53
-- Versi server: 8.4.3
-- Versi PHP: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectkasir`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kasir`
--

CREATE TABLE `kasir` (
  `id` int NOT NULL,
  `nama_barang` varchar(100) DEFAULT NULL,
  `kode_barang` varchar(50) DEFAULT NULL,
  `harga_barang` decimal(10,2) DEFAULT NULL,
  `stok` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Dumping data untuk tabel `kasir`
--

INSERT INTO `kasir` (`id`, `nama_barang`, `kode_barang`, `harga_barang`, `stok`) VALUES
(1, 'Air Mineral 600ml', 'BRG001', 3500.00, 100),
(2, 'Mi Instan Ayam', 'BRG002', 3000.00, 200),
(3, 'Mi Instan Kari', 'BRG003', 3100.00, 180),
(4, 'Roti Tawar', 'BRG004', 12500.00, 50),
(5, 'Roti Coklat', 'BRG005', 7500.00, 60),
(6, 'Telur Ayam (10pcs)', 'BRG006', 24000.00, 40),
(7, 'Susu UHT 1L', 'BRG007', 17500.00, 70),
(8, 'Susu Kental Manis', 'BRG008', 12000.00, 80),
(9, 'Sabun Mandi', 'BRG009', 3500.00, 90),
(10, 'Shampoo Sachet', 'BRG010', 1500.00, 100),
(11, 'Pasta Gigi 75gr', 'BRG011', 9000.00, 50),
(12, 'Tisu Gulung', 'BRG012', 12000.00, 40),
(13, 'Tisu Basah', 'BRG013', 7000.00, 30),
(14, 'Minyak Goreng 1L', 'BRG014', 18500.00, 70),
(15, 'Gula Pasir 1kg', 'BRG015', 14000.00, 60),
(16, 'Kopi Sachet', 'BRG016', 1500.00, 200),
(17, 'Teh Celup 25pcs', 'BRG017', 11000.00, 50),
(18, 'Biskuit Coklat', 'BRG018', 8500.00, 70),
(19, 'Biskuit Keju', 'BRG019', 8500.00, 60),
(20, 'Permen Mint', 'BRG020', 3000.00, 100),
(21, 'Permen Karet', 'BRG021', 2500.00, 100),
(22, 'Air Soda', 'BRG022', 6000.00, 40),
(23, 'Kecap Manis 275ml', 'BRG023', 9500.00, 50),
(24, 'Saus Tomat 275ml', 'BRG024', 8500.00, 50),
(25, 'Cuka Masak', 'BRG025', 6500.00, 30),
(26, 'Sarden Kaleng', 'BRG026', 12000.00, 40),
(27, 'Sambal Botol', 'BRG027', 9500.00, 35),
(28, 'Keripik Kentang', 'BRG028', 10000.00, 80),
(29, 'Coklat Batang', 'BRG029', 9500.00, 70),
(30, 'Wafer Coklat', 'BRG030', 8000.00, 90),
(31, 'Pop Mie Ayam', 'BRG031', 5000.00, 100),
(32, 'Kopi Botol', 'BRG032', 7000.00, 60),
(33, 'Susu Botol', 'BRG033', 8500.00, 70),
(34, 'Minuman Energi', 'BRG034', 6500.00, 50),
(35, 'Minuman Isotonik', 'BRG035', 8000.00, 60),
(36, 'Cemilan Jagung', 'BRG036', 9500.00, 70),
(37, 'Snack Rumput Laut', 'BRG037', 7500.00, 50),
(38, 'Mie Telur 1kg', 'BRG038', 12000.00, 40),
(39, 'Beras 5kg', 'BRG039', 65000.00, 30),
(40, 'Kacang Goreng', 'BRG040', 8500.00, 80),
(41, 'Minyak Kayu Putih', 'BRG041', 11000.00, 25),
(42, 'Parfum Mini', 'BRG042', 9500.00, 40),
(43, 'Sabun Cuci Piring', 'BRG043', 7500.00, 60),
(44, 'Detergen Bubuk 800gr', 'BRG044', 16000.00, 50),
(45, 'Pewangi Pakaian', 'BRG045', 9000.00, 50),
(46, 'Obat Nyamuk Spray', 'BRG046', 18000.00, 30),
(47, 'Lilin', 'BRG047', 5000.00, 20),
(48, 'Baterai AA 2pcs', 'BRG048', 15000.00, 30),
(49, 'Plastik Sampah', 'BRG049', 8500.00, 40),
(50, 'Tali Rafia', 'BRG050', 5000.00, 25);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kasir`
--
ALTER TABLE `kasir`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode_barang` (`kode_barang`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kasir`
--
ALTER TABLE `kasir`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
