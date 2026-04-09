import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Create a basic observable
const stream1 = new Observable<number>((observer) => {
  observer.next(1.2);
  observer.next(2.8);
  observer.next(3.5);
  observer.next(4.7);
  observer.complete();
});

// Transform streams
const stream2 = stream1.pipe(map((x) => Math.round(x)));
const stream3 = stream2.pipe(filter((x) => x > 3));

// Subscribe
stream3.subscribe((res) => Listener(res));

// Listener function
function Listener(res: number) {
  console.log(res);
}