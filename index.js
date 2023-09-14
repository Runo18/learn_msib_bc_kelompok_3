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
