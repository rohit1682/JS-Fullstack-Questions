# Angular Routing

Angular Routing enables navigation inside a single page application by mapping URL paths to components.

## Core concepts

- `Routes` — an array of route definitions
- `RouterOutlet` — the location where routed views render
- `routerLink` — template link for navigation
- `Router` — service for programmatic navigation
- `Guards` — control access to routes
- `Resolvers` — preload route data before activation

## Basic router setup

```ts
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

## Router outlet

Place the router outlet in the application template.

```html
<app-header></app-header>
<router-outlet></router-outlet>
```

## Navigation in templates

```html
<a routerLink="/">Home</a>
<a routerLink="/about">About</a>
```

## Programmatic navigation

```ts
import { Router } from '@angular/router';

constructor(private router: Router) {}

goToAbout() {
  this.router.navigate(['/about']);
}
```

## Route parameters

Dynamic segments pass values in the URL.

```ts
{ path: 'product/:id', component: ProductComponent }
```

Read parameters:

```ts
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {
  const id = this.route.snapshot.paramMap.get('id');
}
```

Use observable param changes with `paramMap`.

## Query parameters and fragment

```html
<a [routerLink]="['/search']" [queryParams]="{ q: 'angular' }">Search</a>
```

```ts
this.route.queryParamMap.subscribe(params => {
  const q = params.get('q');
});
```

## Child routes and nested routing

```ts
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'users', component: AdminUsersComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];
```

## Lazy loading

Lazy loading improves startup performance by loading feature code only when needed.

```ts
{ path: 'shop', loadChildren: () => import('./shop/shop.routes').then(m => m.shopRoutes) }
```

## Route guards

Common guards:

- `canActivate` — allow or block activation
- `canDeactivate` — prompt before leaving
- `canLoad` — block lazy-loaded modules
- `canActivateChild` — protect child routes

Example guard:

```ts
import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {
  canActivate() {
    return this.authService.isLoggedIn();
  }
}
```

## Resolvers

Resolvers load data before routing completes.

```ts
{ path: 'profile', component: ProfileComponent, resolve: { user: UserResolver } }
```

## Route data

Static data can be attached to routes.

```ts
{ path: 'help', component: HelpComponent, data: { title: 'Help' } }
```

Access data in the component:

```ts
this.route.data.subscribe(data => console.log(data.title));
```

## Route lifecycle events

The `Router` emits events such as:

- `NavigationStart`
- `NavigationEnd`
- `NavigationError`
- `NavigationCancel`

Use these for loading indicators or analytics.

## Best practices

- use a wildcard route for 404 pages
- keep route URLs semantic and RESTful
- separate feature routes in their own modules
- prefer lazy loading for large sections
- avoid long route chains with deeply nested children

## Interview questions

- What is `RouterOutlet`?
- How do you pass route and query parameters?
- What is lazy loading and why use it?
- When would you use a route guard?
