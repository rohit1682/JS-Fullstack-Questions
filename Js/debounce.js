function search(message) {
    console.log(message);
}

function debounceSearch(fn, delay) {
    let timer = null;

    return function debounce(...args) {
        clearTimeout(timer);

        timer = setTimeout( () => {
            fn.apply(this, args);
        }, delay);
    }
}

const mySearch = debounceSearch(search, 500);

mySearch("r");
mySearch("ro");
mySearch("roh");
mySearch("rohi");
mySearch("rohit");
mySearch("rohit g");
mySearch("rohit gh");
mySearch("rohit gho");
mySearch("rohit ghos");
mySearch("rohit ghosh");

