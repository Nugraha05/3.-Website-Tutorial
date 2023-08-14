// Tugas Kecil Dari Dea Afrizal

/*
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
*/

// Tugas 1

var saldoAwal = Number(prompt('saldo awal :'))
// console.log(saldoAwal)
var saldoKedua = Number(prompt('saldo kedua'))
// console.log(saldoKedua)
var hutang = 10000

var saldoAkhir = saldoAwal + saldoKedua - hutang
console.log(`ini adalah saldo awal ${saldoAkhir}`)

// Tugas 2

var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu']
var hari = namaHari[new Date().getDay()]
console.log(hari)

var namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
var bulan = namaBulan[new Date().getMonth()]
console.log(bulan)

var tes = new Date
console.log(tes)
// 1 2 3 4 5 6 7
// 8 9 10 11 12 13 14
// 15 16 17 18 19 20 21 22 23 24
// 25 26 27 28 29 30 31

// switch(hari) {
//     case 1:
//         console.log('Selamat Senin')
//     break
//     case 2, 9, 16, 26:
//         console.log('Selamat Selasa')
//     break
// }

