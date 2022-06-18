// const data = {};
const getData = () => {
  // get data API
  const url = "https://api.github.com/users/baharudin-solusite";

  // melakukan fetch data
  fetch(url)
    // membuka paket
    .then((response) => response.json())
    // mengecheck hasil paketnya sudah sesuai atau belum
    
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

getData();


// soal slide 2

let listOfFlang = document.getElementById("list-flags");


  const getFlags = async () => {
    const url = "https://restcountries.com/v2/all";
  
    // melakukan fetch data
    let response = await fetch(url);
    let result = await response.json();
    // membuka paket
    result.forEach((item) => {

     listOfFlang.innerHTML += 
     
    `<div>
        <img src="${item.flags.svg}" alt="" width="100">
         <h3>${item.name}</h3>
     </div>`;
    });
    console.log(result);

  
  };
  
    // function async jika di dalamnya dikasih return
    // maka function ini akan bernilai sebuah promise
    // return result
  getFlags();