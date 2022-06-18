// Object adalah sekumpulan list dari tipe data primitif (terkadang juga tipe data reference) yang menyimpan nilai dengan konsep berpasangan name-value. Tiap item (yang lebih dikenal dengan nama variabel) disebut dengan property, dan function disebut dengan method.
// ada key ada velue
// analoginya seperti sebuah rumah pasti ada sebuah properti didalamnya 

// cara membuat Object
let dataObject = { key: "velue" };

// contoh object
let preson = {
    nama: "Baharudin",
    umur: 20,
    hoby: "Melukis",
    'makanan kesukaan': 'tempe'
}
// menampilkan semua data
console.log(preson);

// cara mengakses properti 
// 1. Dot notation

// menampilkan data umur
console.log(preson.umur + ' ' + 'umur kepala dua');
// menampilkan data hoby
console.log(preson.hoby);

// 2. Bracket notation
console.log(preson['umur'] + ' ' + 'umur kepala dua');
// untuk memanggil type data string dalam objek
console.log(preson['makanan kesukaan']);


// cara Updete Objeck
let student = {
    nama: "Baharudin",
    umur: 20,
}

// cara mengupdete object dapat dilakukan dengan 2 cara
// dot notation dan bracket

// Updete menggunakan dot (.)
student.hoby = 'memancing';

// updete data menggunakan Bracket dapat menambah sebuah data menggunkan spasi
student['address'] = 'surakarta';

// menambahkan object menggunakan variabel
let song = "pop";
student[song] = 'saya suka'
// student.song = 'saya suka'
console.log(student);





// Const in object
// Nilainya dapat di update, namun tidak boleh reassign dengan nilai baru
const car = {
    brand: 'civic',
    model: 'Type R',
    color: 'Black'
}
car.year = 2022
console.log(car);
car = 'avanza'
console.log(car);

// Method in object
const greeting = {
    welcome: function() {
        return 'Halo selamat datang'
    },
    goodBye: function() {
        return 'Sampai jumpa lagi'
    }
}
console.log(greeting.welcome());
console.log(greeting.goodBye());






// Array of object
let arr = [20, 'dila', 'javascript']
let students = [{
        name: 'jessica',
        age: 17,
        isVerivied: true
    },
    {
        name: 'William',
        age: 18,
        isVerivied: true
    },
    {
        name: 'Chika',
        age: 17,
        isVerivied: false
    },
]
for (const i in students) {
    let studentData = students[i]
    let isVerivied = studentData.isVerivied

    if (isVerivied === true) {
        console.log(studentData);
    }
}

// Latihan
let dataAge = [20, 17, 18]
let dataStudent = [{
        name: 'jessica',
        isVerivied: true,
        age: 20
    },
    {
        name: 'William',
        isVerivied: true
    },
    {
        name: 'Chika',
        isVerivied: false
    },
]

let result = []
for (const key in dataStudent) {
    let allStudent = dataStudent[key]
    allStudent.age = dataAge[key] //0 dataAge[2]
    result.push(allStudent)
}
console.log(result);

/* Output
[{
    name: 'jessica',
    isVerivied: true,
    age: 20
},
{
    name: 'William',
    isVerivied: true,
    age: 17
},
{
    name: 'Chika',
    isVerivied: false,
    age: 18
},
]

*/




