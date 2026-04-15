# Angular Components

A component is the primary building block of an Angular app.
It contains the view, behavior, and metadata required to display part of the UI.

## What is a component?

An Angular component is a class decorated with `@Component`.
It ties together:

- A TypeScript class for state and logic
- An HTML template for the view
- Optional styles scoped to that component
- Metadata that tells Angular how to create and connect it

## Component anatomy

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  standalone: true,
  imports: []
})
export class UserCardComponent {
  @Input() userName = 'Guest';
  @Output() edit = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }
}
```

### Important metadata fields

- `selector` — the HTML tag to use this component in templates
- `template` / `templateUrl` — the markup for the component view
- `styles` / `styleUrls` — component-specific CSS or SCSS
- `standalone` — whether the component is self-contained
- `imports` — dependencies the component needs when standalone

## Component roles

A component should:

- manage its own data and state
- render the view using template bindings
- react to user interactions
- delegate reusable logic to services

## Communication patterns

### Parent to child

Use `@Input()` to pass data from parent to child.

```ts
@Component({ selector: 'app-parent', template: `<app-child [title]="pageTitle"></app-child>` })
export class ParentComponent {
  pageTitle = 'Dashboard';
}
```

```ts
@Component({ selector: 'app-child', template: `<h1>{{ title }}</h1>` })
export class ChildComponent {
  @Input() title = '';
}
```

### Child to parent

Use `@Output()` and `EventEmitter`.

```ts
<button (click)="notifyParent()">Save</button>
```

```ts
@Output() saved = new EventEmitter<void>();

notifyParent() {
  this.saved.emit();
}
```

### View child and content child

- `@ViewChild()` accesses elements or child components in the same template.
- `@ContentChild()` accesses content projected into the component.

## Standalone component vs NgModule-backed component

### Standalone

- `standalone: true`
- imports dependencies directly in component metadata
- no need to declare component in an `NgModule`
- ideal for new apps and simple feature units

### NgModule-backed

- component must be declared in an `NgModule`
- dependencies are provided by module imports
- still useful for large legacy apps and module-level boundaries

## Component lifecycle interface

Every component can implement lifecycle hooks to react at key moments:

- `ngOnChanges()` — when input bindings change
- `ngOnInit()` — once after first change detection
- `ngAfterViewInit()` — after view and child views are initialized
- `ngOnDestroy()` — before the component is destroyed

## Common interview questions

- What is the difference between `@Component` and `@Directive`?
- How do `@Input()` and `@Output()` work?
- Why would you use a standalone component?
- What is component encapsulation?

## Best practices

- Keep a component focused on a single responsibility
- Move reusable logic into services
- Prefer immutable inputs and `OnPush` change detection when possible
- Avoid complex logic inside the template
