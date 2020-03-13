function foo() {
  console.log("foo");

  return new Promise(resolve => {
    console.log("foo timeout before");

    setTimeout(() => {
      console.log("foo timeout");

      resolve("foo resolved");
    }, 1000);

    console.log("foo timeout after");
  });
}

function bar() {
  console.log("bar");

  return new Promise(resolve => {
    console.log("bar timeout before");

    setTimeout(() => {
      console.log("bar timeout");

      resolve("bar resolved");
    }, 3000);

    console.log("bar timeout after");
  });
}

foo().then(console.log("trs"));
// If you call a function in then() it will run immeditly and won't wait for the first one to resolve
// if you call a promise in then() it will wait until the first promise is resolved then resolve the chained promise

// Great chaining example with axios
// axios.get(...)
//   .then((response) => {
//     return axios.get(...); // using response.data
//   })
//   .then((response) => {
//     console.log('Response', response);
//   });

// resolving array promise
// var p = Promise.resolve([1,2,3]);
// p.then(function(v) {
//   console.log(v[0]); // 1
// });

Promise.resolve("Success").then(
  function(value) {
    console.log(value); // "Success"
  },
  function(value) {
    // not called
  }
);
