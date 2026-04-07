// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(jsonObject => console.log(jsonObject))
// .catch(error => console.error(error))





// async function getData1(url) {
//     const response = await fetch(url);
//     const responseObejct = await response.json();
//     return responseObejct;
// }

// console.log(await getData1('https://jsonplaceholder.typicode.com/todos/1'))




// import axios from 'axios';

// async function getData2(url) {
//     const response = await axios.get(url);
//     return response.data; 
// }

// console.log(await getData2('https://jsonplaceholder.typicode.com/todos/1'));



import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => console.log(response.data))
.catch(error => console.error(error));