const body = document.body
// const btn1 = document.querySelector('#btn1')


function tes() {
    var duitPertama = Number(prompt('Duit Awal'))
    var duitKedua = Number(prompt('Duit Kedua'))
    var hutang = 100

    var duitAkhir = duitPertama + duitKedua - hutang

    // Menyeleksi Query Dari HTML
    const textP = document.querySelector('#textP')
    textP.innerHTML = duitAkhir
    
    // Menambahkan Content Baru
    // body.append(textP)

    // Console Information
    console.log(duitAkhir)
}

function table() {
    var nama = prompt('Nama:')
    var sekolah = prompt('Sekolah')
    var umur = prompt('Umur')

    // const tesBang = document.querySelector('tr')
    // tesBang.innerHTML = '<tr><td>tes</td><td>tes</td><td>tes</td></tr>'
    // body.append(tesBang)

    const namaHasil = document.querySelector('#nama')
    namaHasil.innerHTML = nama
    console.log(namaHasil)

    const sekolahHasil = document.querySelector('#sekolah')
    sekolahHasil.innerHTML = sekolah
    console.log(sekolahHasil)

    const umurHasil = document.querySelector('#umur')
    umurHasil.innerHTML = umur
    console.log(umurHasil)
}