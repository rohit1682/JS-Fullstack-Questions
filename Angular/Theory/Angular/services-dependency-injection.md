# Services and Dependency Injection

Angular services encapsulate reusable logic that components can share.
Dependence Injection (DI) is the mechanism that creates and supplies these services.

## What is a service?

A service is usually a class decorated with `@Injectable()`.
It should hold business logic, data access, or state that is not view-specific.

### Examples of service responsibilities

- HTTP API calls
- caching data
- authentication and authorization
- shared state across components
- utility or helper functions

## Creating a service

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }
}
```

## Injecting a service

### Constructor injection

```ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({ selector: 'app-root', template: `{{ auth.isLoggedIn }}` })
export class AppComponent {
  constructor(public auth: AuthService) {}
}
```

### `inject()` function

```ts
import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({ standalone: true, selector: 'app-root', template: `{{ auth.isLoggedIn }}` })
export class AppComponent {
  private auth = inject(AuthService);
}
```

## Provider scopes

### `providedIn: 'root'`

- one singleton instance for the whole app
- most common choice

### `providedIn: SomeModule`

- shared only by that module and its children
- useful for feature modules

### `providers` in `@Component`

- a new instance is created for each component instance
- useful for isolated state

## Hierarchical injectors

Angular uses a tree of injectors:

- root injector for app-wide providers
- module injector for lazy-loaded modules
- component injector for providers listed in a component

When Angular resolves a dependency, it searches from the closest injector outward.

## Singleton vs instance per component

### Singleton service

```ts
@Injectable({ providedIn: 'root' })
```

### Component-scoped service

```ts
@Component({ providers: [CounterService] })
```

This creates a new service instance for each component subtree.

## HTTP and interceptors

Services are the ideal place to use `HttpClient`.
Use interceptors to add headers, handle errors, or log requests.

## Testing services

- Use `TestBed.configureTestingModule({ providers: [MyService] })`
- mock dependencies using `useValue` or `useClass`
- keep services pure and testable

## Interview points

- What is dependency injection?
- What does `providedIn: 'root'` mean?
- How is DI hierarchical in Angular?
- Why place logic in services instead of components?

## Best practices

- Keep services stateless when possible
- Use services for shared logic and data access
- Avoid business logic inside templates
- Prefer constructor injection for clarity
