// Javascript adalah bahasa pemograman yang sangat powerful yang digunakan untuk logic pada sebuah website

// Contoh Syntax JavaScript
alert()
prompt()
confirm()

//-------Type data 
// Tipe data adalah klasifikasi yang kita berikan untuk berbagai macam data yang digunakan dalam programming.

// number
// Tipe data number adalah tipe data yang mengandung semua angka termasuk angka desimal.
let number1 = 12;
let number2 = 24;
console.log(number1);
// string
// Tipe data string adalah grup karakter yang ada pada keyboard laptop/PC kita yaitu letters (huruf), number (angka), spaces (spasi), symbol, dan lainnya.
// Harus diawali dan diakhiri dengan single quotes ‘ … ‘ ataupun double quotes “ … “.
let string = 'sesi belajar Mandiri';
console.log(string);

// boolean
// Tipe data boolean adalah tipe data yang hanya mempunyai 2 buah nilai.
// 2 buah nilai tersebut adalah TRUE (benar) or FALSE (salah).
// Analoginya adalah seperti tombol/button ON/OFF dan juga seperti sebuah jawaban antara YES/NO.
let benar = true;
let salah = false;
console.log(benar);
// null
// Tipe data null adalah tipe data yang diartikan bahwa sebuah variable/data tidak memiliki nilai.
// Null berbeda dengan string kosong. String kosong masih memiliki tipe data string.
let dataPertama = null;
console.log(dataPertama);
// undefined
// Tipe data null biasanya diperoleh dalam kondisi normal dan sudah kita rencanakan.
// Tipe data undefined biasanya didapat dari hasil kesalahan program (error), kelalaian programmer, dan tidak direncanakan.
let a = 'benar';
let b = 'salah';
let peserta = ["baharudin","Savira","Pak Edy"];
console.log(a);
console.log(b);
console.log(peserta.length);
console.log(peserta.panjangkarakter);

// object
// Tipe data object adalah koleksi data yang saling berhubungan (related). Tipe data pbject dapat menyimpan data dengan tipe data apapun (number, string, boolean, dan lainnya).
// Tipe data object mempunyai key dan value.
var dataDiri = {
    namaPendek:"John",
    namaPanjang:"Cena",
    umur:50,
    warna:"biru"
};
console.log(dataDiri);




const hasil = "9" + 1;
console.log(hasil);

const siswa = {
    nama : 'baharudin',
    kelas : {
        tingkat: 11,
        jurusan: 'IPA'
    }
};
console.log(siswa.kelas.jurusan);

// --------
let sayHello = 'Hello';
const sayGoobye = 'Goodbye';

const speakIndonesia = () => {
    sayHello = 'Hay!';
    console.log(sayHello);
    console.log(sayGoobye);
};
speakIndonesia();
// ----------
const address = () => {
    const country = 'Indonesia';
    const province = 'DKI Jakarta';
    const city = 'Jakarta Selatan';

};
console.log('Next stop: ${city}');

// -----------
function sum(a = 4,b) {
    return a + b
}

num1 = 5
num2 = 10
sum(num1,num2)
console.log(sum(5,10))
