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

function outer(m) {
  function inner() {
    console.log(m);
  }
  return inner;
}
let aaa = outer(9);
console.log(aaa);
aaa();
