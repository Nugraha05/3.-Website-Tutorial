// const body = document.body
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
