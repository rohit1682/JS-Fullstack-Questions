const users = [
    {id : 1, name : "Rohit" },
    {id : 2, name : "Sneha" },
    {id : 3, name : "Rohan" },
    {id : 4, name : "Nilanjana" },
    {id : 5, name : "Rishabh" },
    {id : 6, name : "Subashish" },
    {id : 7, name : "Jhimly" },
];

function getUser(users, userId) {
    return new Promise( (resolve, reject) => {

        // const success = true; // We will toggle for success check

        // if(success) {
        //     users.forEach(user => {
        //         if(user.id === userId) {
        //             resolve(user.name);
        //         }
        //     });
        // }
        // else {
        //     reject("Cannot Fetch User Details");
        // }

        const user = users.find((user) => user.id === userId);

        if (user) {
            resolve(user.name); // Resolve the promise with the user's name
        } else {
            reject("Cannot Fetch User Details"); // Reject if no user matches
        }

    });
}

// getUser(users, 1).then((name) => console.log(name)); //success state

// getUser(users, 10).then((name) => console.log(name)); //reject state

// Test the success state
getUser(users, 1)
  .then((name) => console.log(name))
  .catch((err) => console.error(err)); // Use `.catch` for better error handling

// Test the reject state
getUser(users, 10)
  .then((name) => console.log(name))
  .catch((err) => console.error(err)); // Handle the rejection error
