# Standalone Components

Standalone components are a modern Angular feature that lets components manage their own dependencies without NgModule declarations.

## What is a standalone component?

A standalone component includes:

- `standalone: true`
- a local `imports` list of required dependencies
- direct use without module registration

## Example

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Home</h1>`
})
export class HomeComponent {}
```

## Bootstrapping standalone apps

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: []
});
```

## Component-level imports

Standalone components declare dependencies directly, including:

- other standalone components
- Angular directives like `NgIf`, `NgFor`
- pipes
- router directives
- feature modules if needed

```ts
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  template: `<app-header></app-header>`
})
export class AppComponent {}
```

## Standalone vs NgModule-backed applications

### NgModule-backed

- `declarations`, `imports`, `exports` are defined in modules
- components are registered in a module
- bootstrapping happens via `AppModule`

### Standalone

- each component imports what it needs
- no `declarations` or `bootstrap` arrays are required
- easier dependency tracing and cleaner structure

## When to use standalone components

- building new Angular applications
- creating reusable UI components
- simplifying routing and feature composition

## Migration notes

You can mix standalone components with NgModules.
A standalone component can be imported into a module, and a module can import standalone components.

## Interview questions

- What makes a component standalone?
- How do standalone components replace NgModules?
- Can standalone and NgModule-backed components coexist?
- Why is `bootstrapApplication` used?
