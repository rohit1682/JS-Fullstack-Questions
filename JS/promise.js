const pr = new Promise((resolve, reject) => {
    const newData = "Hello";
    setTimeout(() => {
        resolve(newData);
    }, 1000);
})

pr.then((newData) => {
    console.log(newData);
})
