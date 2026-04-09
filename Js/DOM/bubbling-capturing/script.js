// Selectors for all nested elements

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Add event listeners for BUBBLING phase

grandparent.addEventListener('click', (event) => {
  console.log('Grandparent bubbling');
}, false); // 'false' means bubbling phase (default)

parent.addEventListener('click', (event) => {
  console.log('Parent bubbling');
}, false);

child.addEventListener('click', (event) => {
  console.log('Child bubbling');
}, false);

// Add event listeners for CAPTURING phase

// grandparent.addEventListener('click', (event) => {
//   console.log('Grandparent capturing');
// }, true); // 'true' means capturing phase

// parent.addEventListener('click', (event) => {
//   console.log('Parent capturing');
// }, true);

// child.addEventListener('click', (event) => {
//   console.log('Child capturing');
// }, true);


// Prevent default behavior & stop propagation examples

// child.addEventListener('click', (event) => {
//   event.stopPropagation(); // Stops the event from propagating further
//   console.log('Child bubbling (stopPropagation called)');
// });