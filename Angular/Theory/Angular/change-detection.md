# Angular Change Detection

Angular’s change detection system determines when views should be updated.
Understanding it helps build performant applications.

## Default change detection

By default, Angular checks every component when any event occurs.
This includes:

- user input events
- HTTP responses
- timer callbacks
- observable emissions

## Change detection and zones

Angular uses `Zone.js` to know when asynchronous tasks finish.
When a task completes, Angular runs change detection for the app.

## `OnPush` strategy

`OnPush` is an optimized strategy that runs change detection only when:

- input property references change
- an event originates from the component or its children
- `markForCheck()` is called manually

Use it for components that accept immutable inputs.

```ts
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {}
```

## When `OnPush` works

Change detection runs when:

- `@Input()` receives a new object reference
- the component emits an event via `Output`
- `ChangeDetectorRef.markForCheck()` is called

It does not run when you mutate an object in place.

## Manual change detection control

Inject `ChangeDetectorRef` to manage detection.

```ts
constructor(private cdr: ChangeDetectorRef) {}

updateValue() {
  this.data = { ...this.data, value: 42 };
  this.cdr.markForCheck();
}
```

### `detectChanges()`

Immediately runs change detection for the component and its children.

### `markForCheck()`

Marks the component as dirty so it will be checked during the next cycle.

### `detach()` and `reattach()`

Use `detach()` to stop checking a subtree, and `reattach()` to resume.

## Change detection examples

### Default strategy example

```ts
@Component({ changeDetection: ChangeDetectionStrategy.Default })
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
```

### OnPush with immutability

```ts
@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
export class ListComponent {
  @Input() items: string[] = [];
}
```

If `items.push('new')` is used, `OnPush` may not update the view. Use `this.items = [...this.items, 'new']` instead.

## Performance tips

- use `OnPush` for reusable presentational components
- avoid mutating inputs directly
- prefer pure pipes and immutable data
- keep component trees shallow when possible

## Interview questions

- What does `ChangeDetectionStrategy.OnPush` do?
- Why does mutating an input object not trigger an OnPush update?
- How do `markForCheck()` and `detectChanges()` differ?
- When should you call `detach()` on `ChangeDetectorRef`?
