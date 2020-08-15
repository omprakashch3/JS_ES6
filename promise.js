// let promiseToCleanTheRoom = new Promise((resolve, reject) => {
//   //cleaning the room
//   let isclean = false;
//   if (isclean) {
//     resolve("clean");
//   } else {
//     reject("not clean");
//   }
// });

// promiseToCleanTheRoom
//   .then((fromResolve) => {
//     console.log("room is  " + fromResolve);
//   })
//   .catch((fromReject) => {
//     console.log("room is " + fromReject);
//   });

//write a program to clean theroom aftre cleaning remove the garbage then won th ice cream using promise

let cleanTheRoom = function () {
  return new Promise((resolve, reject) => {
    console.log("clened the room");
  });
};

let removeGarbage = function (message) {
  return new Promise((resolve, reject) => {
    console.log(message + "garbage removed from the room");
  });
};
let getIcecream = function (message) {
  return new Promise((resolve, reject) => {
    console.log(message + "won icecream");
  });
};
// cleanTheRoom()
//   .then(function (result) {
//     return removeGarbage(result);
//   })
//   .then(function (result) {
//     return getIcecream(result);
//   })
//   .then(function () {
//     console.log("finished" + result);
//   });

Promise.all([cleanTheRoom(), removeGarbage(), getIcecream()]).then(() => {
  console.log("all finished");
});
