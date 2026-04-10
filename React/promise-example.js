Promise.resolve().then(() => {
  console.log('Promise 1');
 
  process.nextTick(() => {
    console.log('nextTick inside Promise');
  });
 
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});
 
process.nextTick(() => {
  console.log('nextTick');
});
 
 