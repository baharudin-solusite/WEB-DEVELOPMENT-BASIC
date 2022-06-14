console.log(document);
console.log(document.title);

// merubah title document
document.title = "Skilvul";

// mengambil 1 element dari HTML menggunakan id
console.log(document.getElementById("web"));

// mengambil nilai dari HTML
console.log(document.getElementById("web").innerHTML);

console.log(document.getElementsByClassName("skilvul"));

// query selector untuk mengambil nilai
console.log(document.querySelector("#web").innerHTML);
console.log(document.querySelector(".skilvul").innerHTML);

// merubah isi html dari id web
// document.querySelector("#web").innerHTML = "Web";
document.getElementById("web").innerHTML = "Web 2";

document.querySelector("#paragraf").innerHTML = "ini tag p";

// membuat element dari DOM
const text = document.createElement("p");
text.textContent = "Ini tag P dari DOM";

document.querySelector(".text-box").appendChild(text);

// buat element h4 berisi 'saya suka coding'
const textCoding = document.createElement("h4");
textCoding.textContent = "saya suka coding";

document.querySelector(".text-box").appendChild(textCoding);

// menambahkan css melalui dom
textCoding.style.color = "red";
textCoding.style.fontSize = "100px";

// mengambil value dari input
// const username = document.querySelector("#username");
const password = document.querySelector("#password");

console.log(username.value);

// membuat event listener
const buttonLogin = document.querySelector("#login");

// buttonLogin.onclick = function () {
//   alert(username.value);
// };

buttonLogin.addEventListener("click", function () {
  alert(document.querySelector("#username").value + password.value);
});
// ketika button login di klik mengeluarkan alert username dan password

// event mouse over
const hover = document.querySelector("#hover");

hover.addEventListener("mouseover", function () {
  console.log("tes");
  hover.style.color = "yellow";
});
