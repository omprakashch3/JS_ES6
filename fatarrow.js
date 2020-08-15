"use strict";
// // es5
// var getA = function (a) {
//   return a;
// };
// console.log(getA(3));

// ES6
// let getA = (a) => a;
// console.log(getA(4));

// square of a number
// let square = (a) => a * a;
// or
// let square = (a) => {
//   return a * a;

// };
// console.log(square(20));

// or
// var a = 4;
// let square = (_) => a * a;
// console.log(square());

// // multiplication
// let multi = (a, b) => a * b;
// console.log(multi(4, 3));

// complex problem
// var x = function () {
//   this.val = 1;
//   setTimeout(function () {
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };
// var xx = new x(); //NAN

// var x = function () {
//   var that = this;
//   this.val = 1;
//   setTimeout(function () {
//     that.val++;
//     console.log(that.val);
//   }, 1);
// };
// var xx = new x(); //2
// // USING FATARROW
// var x = function () {
//   this.val = 1;
//   setTimeout(() => {
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };
// var xx = new x(); //2

var x = function () {
  console.log(arguments[0]);
};
x(1, 2, 3); //1

// fat arrow doesnot have arguments
var y = () => {
  console.log(arguments[0]);
};
y(2, 3, 4); //{}

// using spread operator we can overcome with this problem
var z = (...n) => {
  console.log(n[2]);
};
z(6, 7, 8); //8
