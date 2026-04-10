# 🧱 Components

In Angular 19, standalone components are now the default building blocks. These components are no longer tightly coupled to NgModules, making your app structure simpler and easier to reason about.

# A component consists of:

1. A TypeScript class (application logic)
2. An HTML template (view)
3. Optional styles (CSS/SCSS)
4. Every app has a root component, typically named AppComponent, which acts as the top of the component tree.

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `<h1>Welcome to Angular 19</h1>`,
})
export class AppComponent {}

# 📦 Modules (optional in Angular 19)

While Angular still supports NgModules, you can now build entire applications without them using the bootstrapApplication() API. This enables a more streamlined, tree-shakable setup.

However, NgModules are still useful for:

1. Lazy loading
2. Grouping related functionality
3. Compatibility with legacy codebases

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

bootstrapApplication(AppComponent);

# 🧠 Templates, Directives & Data Binding

Angular templates mix HTML with Angular’s declarative syntax to produce reactive views.

1. @for, @if, and other control flow constructs simplify template logic.
2. Angular supports:
    Property binding: [src]="imageUrl"
    Event binding: (click)="onClick()"
    Two-way binding: [(ngModel)]="name"
    <h2>Hello, {{ name }}</h2>
    <input [(ngModel)]="name" />

New in Angular 17+

Control flow syntax improves readability:

        @if (user) {
        <p>Welcome, {{ user.name }}!</p>
        } @else {
        <p>Please sign in.</p>
        }

# 📜 Metadata & Decorators

Angular uses decorators to associate metadata with classes. Most common:

1. @Component() — for components
2. @Injectable() — for services
3. @Directive() — for custom directives
4. @Pipe() — for custom pipes

# 🧪 Services & Dependency Injection

Services encapsulate logic unrelated to view rendering (like API calls, state, etc.). You define them using the @Injectable() decorator.

Angular’s DI system allows you to inject dependencies with the inject() function (preferred) or constructor injection.

        import { inject, Injectable } from "@angular/core";

        @Injectable({ providedIn: "root" })
        export class UserService {
        getUser() {
            return { name: "Anna", loggedIn: true };
        }
        }

        import { Component, inject } from "@angular/core";
        import { UserService } from "./user.service";

        @Component({
        selector: "app-root",
        standalone: true,
        template: `{{ user?.name }}`,
        })
        export class AppComponent {
        private userService = inject(UserService);
        user = this.userService.getUser();
        }

# 🧭 Routing

The Angular Router allows navigation between views using a declarative API.

1. Define routes using the provideRouter() function.
2. Supports lazy loading, route guards, custom matching, and more.

        import { Routes } from "@angular/router";
        import { HomeComponent } from "./home.component";

        export const routes: Routes = [{ path: "", component: HomeComponent }];

        import { provideRouter } from "@angular/router";
        import { routes } from "./app.routes";

        bootstrapApplication(AppComponent, {
        providers: [provideRouter(routes)],
        });

# Summary

Concept	                            Description
Component	            View + logic unit, now standalone by default
Template	            HTML with Angular bindings and control flow
Service	                Business logic, injected via Angular's DI system
Metadata	            Decorators like @Component, @Injectable, and so on
Routing	                Navigation system based on declarative route definitions