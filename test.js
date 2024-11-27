// const fruits = ["strawberry", "fig", "apple", "date", "banana"];

// for (let i = 0; i < fruits.length; i++) {
//   for (let j = 0; j < fruits.length - i - 1; j++) {
//     if (fruits[j].length > fruits[j + 1].length) {
//       const temp = fruits[j];
//       fruits[j] = fruits[j + 1];
//       fruits[j + 1] = temp;
//     }
//   }
// }
// [ 'fig', 'date', 'apple', 'banana', 'strawberry' ]
// console.log(fruits);

// let data = [1, 2, 5, 6, 3, 7, 9, 8, 0, 1, 0];
// let result = 7;
// let temp = [];
// for (let i = 0; i < data.length; i++) {
//   for (let j = i; j < data.length; j++) {
//     if (data[i] + data[j] == result && i != j) {
//       temp.push([i, j]);
//     }
//   }
// }
// console.log(temp);

let str = "This is for testing";
// let data = str.split(" ");
// let result = "";

// for (let i = data.length - 1; i >= 0; i--) {
//   result = result + (result ? " " : "") + data[i];
// }
// console.log(result);
let result = str.split(" ").reverse().join(" ");
console.log(result);
