import { Subject } from 'rxjs';

// Create a Subject
const subject = new Subject();

// Subscriber 1
subject.subscribe(value => {
  console.log('Subscriber 1:', value);
});

// Subscriber 2
subject.subscribe(value => {
  console.log('Subscriber 2:', value);
});

// Emit values
subject.next(1);
subject.next(2);