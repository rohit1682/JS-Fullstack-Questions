# Angular Lifecycle Hooks

Angular lifecycle hooks allow components to react when they are created, updated, or destroyed.
These hooks help you control initialization, change detection, and cleanup.

## Lifecycle hook categories

### Initialization

- `ngOnChanges()` — when input-bound properties change
- `ngOnInit()` — once after first component construction

### Check and content hooks

- `ngDoCheck()` — custom change detection
- `ngAfterContentInit()` — after projected content is initialized
- `ngAfterContentChecked()` — after projected content is checked

### View hooks

- `ngAfterViewInit()` — after component views are initialized
- `ngAfterViewChecked()` — after component views are checked

### Cleanup

- `ngOnDestroy()` — before the component is destroyed

## Common hooks explained

### `ngOnChanges(changes: SimpleChanges)`

Called before `ngOnInit()` whenever input properties change.
Useful for reacting to new input values.

### `ngOnInit()`

Called once after the first change detection run.
Ideal for initialization that requires bindings to be resolved.

### `ngDoCheck()`

Runs during every change detection cycle.
Use it only when Angular’s default detection strategy is not enough.

### `ngAfterContentInit()`

Called after Angular projects external content into the component.
Useful for `@ContentChild` and `@ContentChildren` logic.

### `ngAfterViewInit()`

Called after the component’s view and child views are initialized.
Use it when you need access to `@ViewChild` elements.

### `ngOnDestroy()`

Use this hook to:

- unsubscribe from observables
- remove event listeners
- clear timers
- destroy manual resources

## Lifecycle order example

1. `ngOnChanges`
2. `ngOnInit`
3. `ngDoCheck`
4. `ngAfterContentInit`
5. `ngAfterContentChecked`
6. `ngAfterViewInit`
7. `ngAfterViewChecked`
8. `ngOnDestroy`

## Example component

```ts
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({ selector: 'app-profile', template: `<p>{{ user?.name }}</p>` })
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: { name: string } | null = null;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
```

## Best practices

- Use `constructor` only for dependency injection
- Put initialization logic in `ngOnInit`
- Clean up subscriptions in `ngOnDestroy`
- Avoid expensive work in `ngDoCheck`
- Use `ngAfterViewInit` for view-dependent logic

## Interview questions

- What is the difference between `ngOnInit` and `constructor`?
- When is `ngOnChanges` called?
- Why should you unsubscribe in `ngOnDestroy`?
- What is `ngAfterViewInit` used for?
