
/* 
    to run this:
    tsc Observable.ts
    node Observable.js
*/

import { Observable } from 'rxjs';

let observable = new Observable<any>((observer: any) => {
    observer.next("Hello World");
    observer.next("I am number 1");
    observer.next("I am number 2");
    observer.error("I am number 3");
    observer.complete("I am number 4");
    observer.next("I am number 5");
    observer.error("Goodbye");
})

function listnerFundtion(message: any) {
    console.log(message);
}

observable.subscribe(listnerFundtion);

