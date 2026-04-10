Think of Observables as data sources, like newsletters are a source of emails. As Observables emit data, newsletters send emails.

# Subscribe to the Observable. 
An Observable is a data source but it doesn’t emit any data until you subscribe. For this reason, we say that Observables are lazy. Subscribe to an Observable by using the aptly named subscribe() method: myObservable.subscribe()

# Start receiving data. 
Once you subscribe to the Observable, you will start to receive some data. You will keep receiving “data packages” until you unsubscribe from the Observable. However, you don’t know exactly how many “data packages” or when you will receive them because it is the Observable that decides. For this reason, we say that Observables push values. You can think of Observables as a stream of data over a period of time.

# Unsubscribe. 
Finally, when you don’t need any more data you unsubscribe using the unsubscribe() method: myObservable.unsubscribe(). This is important to prevent memory leaks. Note that when using an Observable created by Angular it is not necessary to unsubscribe because Angular handles unsubscription automatically. An example is the params observable in the context of routing.



# Cold Observables

The characteristics of cold observables follow from data being produced as part of the observable function.

Cold observables won’t produce data until we subscribe. When we subscribe to an observable, it executes the observable function. Since the code for the producer is included within the observable function, it only runs when the observable function is called.
Cold observables are unicast. Each subscription executes the observable function and thus the code to produce data. For example, if the observable creates an instance of an object or a random value, each observer will get its own separate instance or unique value.
Example: A cold observable instance where the observable function creates a random number using the JavaScript built-in Math object.

import { Observable } from "rxjs";

const randomNumberCold$ = new Observable((observer) => {
  const random = Math.random();
  observer.next(random);
  observer.complete();
});

Each observer gets a separate random value since each subscription executes Math.random():

randomNumberCold$.subscribe(console.log); // 0.8249378778010443
randomNumberCold$.subscribe(console.log); // 0.36532653367650236

# Hot Observable

Hot observables emit data that was produced outside the observable function body.

The data is generated independently of whether an observer subscribes to the observable or not. The observable function simply accesses the data that is already produced (outside the function) and emits the data to observers.

All the observers will get the same data. Thus, a hot observable is said to be multicast.

For example, here’s the random number example rewritten as a hot observable.

const random = Math.random();
console.log(random); // 0.05659653519968999

const randomNumberHot$ = new Observable((observer) => {
  observer.next(random);
  observer.complete();
});

The random number is generated independently of our subscriptions to randomNumberHot$. You’ll notice that we haven’t subscribed to observable yet.

Each observer randomNumberHot$ gets the same random number because Math.random() is only executed once.

randomNumberHot$.subscribe(console.log); // 0.05659653519968999
randomNumberHot$.subscribe(console.log); // 0.05659653519968999