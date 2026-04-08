setTimeout(() => console.log("A"), 0);

Promise.resolve()
  .then(() => {
    console.log("B");
    setTimeout(() => console.log("C"), 0);
  })
  .then(() => console.log("D"));

console.log("E");