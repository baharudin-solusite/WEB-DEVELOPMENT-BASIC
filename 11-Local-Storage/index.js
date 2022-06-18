// localStorage.setItem("name", "skilvul");
// localStorage.setItem("name2", "miana");
// localStorage.setItem("password", "password123");
// localStorage.setItem("umur", 2);
// localStorage.setItem("umur2", "2");

// const nameStorage = localStorage.getItem("name");

// console.log(nameStorage);
// console.log(localStorage.getItem("password"));

localStorage.removeItem("name2");
localStorage.removeItem("umur2");
localStorage.clear();

const save = () => {
    const usernameInput = document.querySelector("#username").value;
    const passwordInput = document.querySelector("#password").value;
    console.log("button click", usernameInput);
  
    const data = {
      username: usernameInput,
      password: passwordInput,
    };
    console.log(data);
  
    // json stringify untuk mengubah data js object menjadi json
    const dataJSON = JSON.stringify(data);
    console.log(dataJSON);
  
    localStorage.setItem("data", dataJSON);
    window.location.replace("./login.html");
  
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("password", passwordInput);
  };
  
  const get = () => {
    const dataJSON = localStorage.getItem("data");
    console.log(dataJSON);
  
    // json parse untuk mengubah data json menjadi js object
    const data = JSON.parse(dataJSON);
    console.log(data);
  };
  
  // function login
  const login = () => {
    // ambil value input dari user
    const usernameInput = document.querySelector("#username").value;
    const passwordInput = document.querySelector("#password").value;
  
    console.log(usernameInput, passwordInput);
  
    // ambil data dari localStorage
    const dataLocal = localStorage.getItem("data");
    const dataParse = JSON.parse(dataLocal);
  
    console.log(dataParse);
  
    // kondisi persamaan input user dengan data di localStorage
  
    if (
      usernameInput === dataParse.username &&
      passwordInput === dataParse.password
    ) {
      console.log("username dan password sama");
      alert("Login sukses");
      window.location.replace("./profile.html");
    } else {
      console.log("username atau password ada yang salah");
      alert("username atau password ada yang salah");
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
    }
  };
  