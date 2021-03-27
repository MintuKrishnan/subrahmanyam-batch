// let i = 0;

// function hai() {
//   let i = 2;
//   console.log(i);
// }
// hai();
// console.log(i);

// let m = 7;

// if (m > 2) {
//   let m = 4;
//   var n = 3;
//   console.log(m, n);
// }
// m = 6;

// console.log(m, n);

// function outer(m) {
//   function inner() {
//     console.log(m);
//   }
//   return inner;
// }
// let aaa = outer(9);
// console.log(aaa);
// aaa();

// const square = function (m) {
//   return m * 2;
// };

// const square = (m) => {
//   return m * 2;
// };
// const square = (m) => {
//   return m * 2;
// };

// const square = (m) => m * 2; // one liner implicit return

// const square = (
//   m //implicit return
// ) => m * 2;

arr = [1, 2, 3, 4, 5, 6, 6, 7];

const arr2 = arr.filter((el) => el > 5);
console.log(arr2);

arr2.forEach((el) => console.log(el));

const arr3 = arr2.map((el) => el);

console.log(arr3);
