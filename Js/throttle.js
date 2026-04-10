function query(message) {
    console.log(message);
}

function throttle(query, limit) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if(now - lastCall >= limit) {
            lastCall = now;
            query.apply(this, args);
        }
    };
}