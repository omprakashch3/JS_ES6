// // spread operators- spread operators spread on demands
// const x = function (...n) {
//   //   console.log(n); //[1,2,3,4,5,6]
//   console.log(n[2]); //3
// };
// x(1, 2, 3, 4, 5, 6);

// previously we used
var y = function () {
  var args = Array.prototype.slice.call(arguments, 0);
  //   var args = [].slice.call(arguments, 0);
  console.log(args);
};
y(1, 2, 3, 4);

// it is also known as rest parameter
var z = function (a, b, c, ...n) {
  console.log(n[2]); //6
  console.log(a, b); //1,2
};
z(1, 2, 3, 4, 5, 6, 7, 8);

var chutiyapanti = ["drink", "smoke", "fuck", "fight"];
var life = ["born", "walk", "study", ...chutiyapanti, "die"];
console.log(life);

var a = [1, 2, 3, 4];
var b = ["a", "b", "c", "x"];
a.push(...b);
console.log(a);
