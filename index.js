// Variabel
let saldo = 1000; // Membuat variabel saldo dengan nilai awal 1000
saldo = saldo + 500; // Mengubah nilai variabel saldo

// Konstanta
const bunga = 0.05; // Membuat konstanta bunga dengan nilai 0.05
// bunga = 0.1; // Ini akan menyebabkan kesalahan karena konstanta tidak dapat diubah

// Kondisional If-Else
let usia = 18;
if (usia >= 18) {
    console.log("Anda adalah seorang dewasa.");
} else {
    console.log("Anda adalah seorang anak-anak atau remaja.");
}

// Switch-Case
let hari = "Selasa";
switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Senin.");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa.");
        break;
    case "Rabu":
        console.log("Hari ini adalah Rabu.");
        break;
    default:
        console.log("Hari ini bukan hari kerja.");
}

// Membuat array dengan beberapa nilai
let fruits = ["Apel", "Jeruk", "Pisang", "Anggur"];

// Mengakses elemen-elemen dalam array
console.log(fruits[0]); // Output: Apel
console.log(fruits[2]); // Output: Pisang

// Menghitung panjang array
console.log(fruits.length); // Output: 4
// Menambah elemen ke dalam array
fruits.push("Mangga"); // Menambahkan Mangga ke akhir array
console.log(fruits); // Output: ["Apel", "Jeruk", "Pisang", "Anggur", "Mangga"]

// Menghapus elemen dari array
fruits.pop(); // Menghapus elemen terakhir (Mangga)
console.log(fruits); // Output: ["Apel", "Jeruk", "Pisang", "Anggur"]

// Membuat objek dengan beberapa properti
let person = {
    nama: "John",
    usia: 30,
    pekerjaan: "Insinyur"
  };
  
  // Mengakses properti dalam objek
  console.log(person.nama); // Output: John
  console.log(person.usia); // Output: 30
  
  // Menambah properti ke dalam objek
person.alamat = "Jl. Contoh No. 123";
console.log(person); // Output: { nama: 'John', usia: 30, pekerjaan: 'Insinyur', alamat: 'Jl. Contoh No. 123' }

// Mengubah nilai properti yang sudah ada
person.usia = 31;
console.log(person); // Output: { nama: 'John', usia: 31, pekerjaan: 'Insinyur', alamat: 'Jl. Contoh No. 123' }

