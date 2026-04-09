# What is a Subject?

An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.


# Subject

We know that a Subject is an Observable. But instead of sending information to one subscriber, they can send their data to multiple subscribers simultaneously (they multicast).

A Subject has three methods which you can use.

1. subscribe with this method, you can activate the subscription of a new subscriber.
2. next with this method, you can pass new values. All the current subscribers will receive this.
3. complete with this method, you close all the subscriptions to the Subject.

A vital detail is that a Subject doesn't have an initial value. Every value passed with the next method will send the values to all the subscribers.

But if the value is already sent before a subscriber is subscribed, it won't receive that data.

# BehaviourSubject

The BehaviourSubject is a variant of the Subject. This variant knows about the current value, which a normal Subject doesn't.

When there has already been sent data to the current subscribers, this Subject becomes very useful. But another subscriber get's introduced at a later moment. Sometimes you want to pass the current value to that subscriber. With the BehaviourSubject you can do that.

So use the BehaviourSubject to give a subscriber the last known value of the Observable. But, what if you want a bit more than the previous value?

Usage

A most common use case for BehaviorSubject is to act as a store or a cache that subscribers can read the latest value when they need it. 


# ReplaySubject

ReplaySubjects are pretty similar to BehaviorSubjects. The difference is that they don’t remember only the last value, but as many as you want. On subscription, they emit all the values they remember to the new observer. You don’t give them any initial value on creation, but you define how many values they should keep in memory. Think of an online playlist that a DJ is playing. But you want to go back in that stream. The ReplaySubject can make sure you can revert three tracks and start listening from there.

Usage

ReplaySubject is commonly used when you need to replay an event or a series of events. Since ReplaySubject doesn’t need a default value as opposed to BehaviorSubject, it’s a handy mechanism to use if an event may never even occur.

Imagine you lazy load a library that needs to process user events. Some events will occur before the library is loaded, so you’ll need to replay them to the library. To do that, simply create a ReplaySubject, push events to it and let the library subscribe to it when loaded.

# Conclusion

Let's wrap this up and conclude when you need a regular Observable or one of the Subject types.

1. Use a Observable when..

A regular Observable should be used when you only need one subscriber. Or you don't care that the subscriber that comes first will be finished first until the second will get its values.

2. Use a Subject when..

When you need multiple subscribers and care that all the subscribers are getting their new values simultaneously, you need a Subject.

Use a BehaviourSubject when you need the last given value.
Use a ReplaySubject when you need more than the last given value. (For example, the previous five values) Or you want to set a time window for the values can be validly sent to subscribers.
Use a Subject if you don't want to pass any value but just want to hook into the event.