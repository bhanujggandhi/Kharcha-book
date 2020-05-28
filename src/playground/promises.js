const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Bhanuj",
      age: 19,
    });
    // reject("something went wrong!");
  }, 5000);
});

console.log("before");

promise
  .then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my next promise");
      }, 5000);
    });
  })
  .then((str) => {
    console.log("====================================");
    console.log("does this run? ", str);
    console.log("====================================");
  })
  .catch((error) => {
    console.log("error: ", error);
  });

console.log("after");
