import { fruit, fruitTropic } from "./fruit.js";
import greet from "./greet.js";
import { userNew } from "./user.js";

// greet("skilvul");
// panggil data user 1 untuk bisa di panggil oleh function greet
console.log(userNew.no1);
greet(userNew.no1);
greet(userNew["3"]);

console.log(fruit);
console.log(fruitTropic);