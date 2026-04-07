function myPromise(url) {
    return new Promise((resolve, reject) => {
        if(url) resolve(true);
        else reject(new Error("Url Error"));
    })
}

myPromise("")
.then(result => console.log(result))
.catch(error => console.error(error.message));

myPromise("Valid Url")
.then(result => console.log(result))
.catch(error => console.error(error.message))