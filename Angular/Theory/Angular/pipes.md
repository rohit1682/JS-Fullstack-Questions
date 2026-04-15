# Angular Pipes

Pipes are used in templates to transform values before they are displayed.
They keep view markup clean and reusable.

## What is a pipe?

A pipe is a class that implements the `PipeTransform` interface.
It takes an input value and returns a transformed output.

## Built-in pipes

- `date` — format dates
- `currency` — format money values
- `percent` — format percentages
- `uppercase` / `lowercase` — change case
- `json` — convert object to JSON string
- `async` — unwrap `Observable` or `Promise`

Example usage:

```html
<p>{{ today | date:'fullDate' }}</p>
<p>{{ price | currency:'USD':'symbol' }}</p>
<p>{{ name | uppercase }}</p>
<p>{{ users | json }}</p>
```

## Pipe chaining

Multiple pipes can be chained.

```html
<p>{{ name | lowercase | titlecase }}</p>
```

## Pure vs impure pipes

### Pure pipes

- only run when input reference changes
- faster and preferred for performance

### Impure pipes

- run on every change detection cycle
- useful for changing data that updates without reference changes

Declare impure pipes with `pure: false`.

## Custom pipe example

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 20): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
```

Template usage:

```html
<p>{{ description | truncate:45 }}</p>
```

## Async pipe

The `async` pipe automatically subscribes to observables and promises.
It also handles cleanup when the component is destroyed.

```html
<div *ngIf="user$ | async as user">
  {{ user.name }}
</div>
```

## When to use pipes

- format values for display
- avoid logic inside templates
- share transformation code across components

## Avoid putting business logic in pipes

Pipes should be pure presentation helpers, not business rule engines.
If the transformation depends on external state or requires side effects, place the logic in a service or component.

## Interview questions

- What is the difference between pure and impure pipes?
- How does the `async` pipe work?
- When should you create a custom pipe?
