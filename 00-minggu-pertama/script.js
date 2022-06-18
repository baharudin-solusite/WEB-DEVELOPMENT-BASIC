// Javascript adalah bahasa pemograman yang sangat powerful yang digunakan untuk logic pada sebuah website

// Contoh Syntax JavaScript
// alert()
// prompt()
// confirm()

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
// let benar = true;
// let salah = false;
// console.log(benar);
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



// pembahasan JavaScript
// JavaScript adalah bahasa pemograman yang bertugas sebagai penggerak atau sendi dari sebuah website -> contoh fitur di dalam website seperti chat, notifikasi dan login
// browser untuk menjalankan JavaScript[//]

// penulisan JS menggunakan 2 cara internal atau external
//
//
// ada beberapa cara untuk mendefinisikan Fariabel
//variabel var -> versi awal dari sebuah variabel
//variabel let -> versi terbaru let yang menggantikan var
//variabel const -> nama variabel bersivat permanen atau tetap
//
//
//contoh penggunaan variabel
let makanan = 'roti';
let minuman = 'jus';
//
makanan = 'nasi';
minuman = 'es jeruk';
//
console.log(makanan);
//contoh variabel const
//
const nama = 'skilvul';
console.log(nama);
// untuk penulisan variabel yang benar yaitu camelCase huruf kecil di depan untuk memisahkan huruf/spasi memakai huruf besar setelah kata vari abel di depannya 
  
//operator Aritmatika
// 
// 
// pengurangan
let jumlah = 31;
let jumlah2 = 32;
console.log(jumlah-jumlah2);
// pertambahan
let tambah = 20;
let tambah2 = 20;
console.log(tambah+tambah2);
// gambar data operator Arit matika

// operator perbandingan 
// 
console.log(100 == '100');
console.log(100 === '100');







// materi minggu ke 2
//
// condisional Statment bertugas mengecek kondisi spesifik untuk menjalankan sebuah perintah berdasarkan kondisi yang dinilai terbaik akan dipilih (true) maka kode dijalankan, (false) maka kode tidak berjalan
//sebagai contoh alur kita saat sedang mengabil makan maka kodisi yang akan kita lakukan bagaimana?
//
//if Condisional
if(true){
    console.log("saya baru kerja")
}
// 
// 
if(true) {
 console.log("gw sudah dateng");
} 
else {
console.log("gw masih di jalan");
}
//
//nilai A 80--100
//nilai B 60--80
//nilai C 48--60
//
const nilai = 70;
if (nilai >= 80){
    console.log("nilainya A");
} else if (nilai >= 60) {
   console.log("nilainya B");
} else if (nlai >= 40){
    console.log("nilainya C");
}

//perbandingan lampu 
//
//
let stopLight = 'yellow';

if (stopLight === 'red') {
   console.log('Stop!');
}  else if (stopLight === 'yellow')  {
    console.log('Slow down. ') ;
}  else if (stopLight === 'green')  {
    console.log('Go!') ;
}  else  {
    console.log('coution,unknown!');
}
//Switch Case Condisional
// 
//digunakan saat kondisi percabangan terlalu banyak hapir salama dengan (if else) tetapi lebih detail cara penggunaannya
//
const lampuMerah = "hijau";
switch (lampuMerah){
    case "hijau":
        console.log("boleh lewat")
        break;
    case "kuning":
        console.log("hati-hati")
        break;
    case "merah":
        console.log("tidak boleh lewat")
        break;
    default:
        console.log("hati-hati melintas")       
}
//
//
// Tenary operator
// ternari berguna untuk sebuah perbandingan dengat singkat dan cepat
//
let isNowSale = true;
isNowSale? console.log('Lets shopping now') :console.log('Shopping leter');





//JavaScript
//
//Scope
//
//bagaimana kita memproses data di dalam ruang lingkup tertentu bisa diakses/tidak
//
//sebagai contoh ada seseorang yang berada ditempat yang berbeda dan memiliki suasana dan pemandangan berbeda di tempatnya
//
//kalo didalam sebuah kodingan, code yang berada di dalam sebuah block(curly braces {} ) jadi bila kodingan berada dalam sebuah block maka kodingan tidak dapat diakses dari luar block tersebut
//contoh 


 
let scopeGlobal = 3;

const scopeLocal = 80;
if (scopeLocal >= 80){
    console.log("naik kelas" + scopeGlobal);
}


//Function
//
//function di javascript adalah sebuah blok kode yang digunakan untuk membungkus suatu proses dengan tujuan agar penulisan kode atau proses yang sama tidak ditulis secara berulang kali.

// adalah blok kode yang digunakan untuk membuangkus suatu proses agar proses tersebut dtidak ditulis secara berulang kali 

//menghtung sebuah perkalian yang sering kita gunakan 
let panjang = 10;
let lebar = 20;
let luas = panjang * lebar;
console.log(luas);//200

let panjang1 = 9;
let lebar1 = 20;
let luas1 = panjang1 * lebar1;
console.log(luas1);//180


function greeting(){
    console.log("selamat datang");
}
greeting()
//return adalah sebuah penegasan untuk mengetahui sebuah hasil akhir dari sebuah function
function ayam(){
    return "selamat sampai kuburan"
}
console.log(ayam());
//
//
//Parameter Function



//width,height adalah Parameter
//nilai angka untuk penjumlahan Argumen
function luasArea(widht, height) {
    return widht * height
}
console.log(luasArea(10,10));//100
console.log(luasArea(15,17));//255
console.log(luasArea(17,10));//170
console.log(luasArea(100,10));//1000

//defaul parameter 
function defaultParameter(nama = "Public"){
    return "Hello" + nama;
}

console.log(defaultParameter());//Output; "HelloPublic"

//for 


//1 javascript Prototype

//yaitu sebuah fitur bawaan javascript yang bisa ditambahkan pada sebuah properti 

// apa aja sih fitur prototype?
//
// A) Constructor
// bila kita memiliki banyak objeck dari pola data yang sama kita bisa meggunakan fitur constractor
//img 1
//kita tidak bisa mengunakan fitur constractor secara langsung
//img 2
// B)objeck Prototype
console.log(Object);   //tidak terpanggil
console.log(Object.prototype);   //terpangil
console.log(String.prototype);

//Menthod/Function Prototyping
//
//kita juga bisa menambahkan method untuk constructor yang telah kita buat
//Method bisa digunakan untuk semua instance object. jadi buat satu kali untuk digunakan semua instrance object
//Method adalah sebuah Fungsi yang ada sebuah Objeck
// semua tipe data dapat digunakan pada Prototype

// kita juga dapat menambahkan sebuah properti menggunakan Custom prototype
String.prototype.repeatString = function (n) {
    return this.repeat(n);
};
console.log("Public".repeatString(2));//11111

//2 Array






let buah = ["Jeruk","Apel","Pisang","Rambutan"]
buah.push = ("Anggur")

//memanggil buah satu persatu
console.log(buah[3]);//"Rambutan"
//memanggil keseluruhan
// console.log(buah)

// start,stop,step
// menghitung dari depan
for (let i = 0; i < buah.length; i++){
    console.log(buah[i]);
}
// menghitung dari belakang
for (let i = 4; i >= 0; i--){
    console.log(buah[i]);
}
// atau
// for (let i = buah.length - 1; 1 >= 0; i--) {
//     console.log(buah[i]);
// }




// versi Parameter
let binatang = ["ikan","sapi","ajing"]
binatang.push("monyet")

function arrayBuah(arr)
{
    for (let i = 0; i < binatang.length; i++){
        console.log(binatang[i]);
    }
}
arrayBuah(binatang)


//  DOM

//membaca title
console.log(document);
console.log(document.title);
// mengganti nama title
document.title = "Public";
// mengambil nilai pada html


// console.log(document.querySelector("#web"));

// document.getElementById("web").innerHTML = "New text!";



for (let i = 0; i <= 5; i++){
    console.log(i);
}

//modulus

// kita dapat melakukan impor data apapun

