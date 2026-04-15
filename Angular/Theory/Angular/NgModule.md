# Angular NgModule

An `NgModule` groups related pieces of an Angular app:
components, directives, pipes, and providers.
It also defines the import/export relationships between these pieces.

## Why use NgModules?

- manage feature boundaries
- control which components are visible outside the module
- register providers for dependency injection
- configure application bootstrap

## Core NgModule properties

### `declarations`

Contains components, directives, and pipes that belong to the module.
Each declarable can belong to only one module.

### `imports`

Imports other modules whose exported declarables are needed.
For example, `CommonModule` provides directives such as `ngIf` and `ngFor`.

### `exports`

Exports a subset of declarations so other modules can use them.

### `providers`

Registers services for the module’s injector.
If a provider is placed in a lazy-loaded module, it is scoped to that module.

### `bootstrap`

Lists the root component(s) that Angular should instantiate when bootstrapping the app.
Only the root module typically uses `bootstrap`.

## Example root module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Feature modules

A feature module groups components and services for a specific area.

```ts
@NgModule({
  declarations: [DashboardComponent, WidgetComponent],
  imports: [CommonModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
```

## Shared module

A shared module collects reusable pipes, directives, and components.

```ts
@NgModule({
  declarations: [CardComponent, HighlightDirective, TruncatePipe],
  imports: [CommonModule],
  exports: [CardComponent, HighlightDirective, TruncatePipe]
})
export class SharedModule {}
```

## Root vs feature module

- Root module boots the app and imports `BrowserModule`
- Feature modules import `CommonModule`
- Shared modules re-export directives and components

## When NgModules are still useful

- organizing large applications
- defining lazy-loaded module boundaries
- grouping related functionality
- controlling provider scope

## Interview questions

- What are the main properties of `@NgModule`?
- What is the difference between `imports` and `exports`?
- Why can a declarable belong to only one module?
- When should you use `BrowserModule` vs `CommonModule`?
