# Templates and Data Binding

Angular templates connect component data and user actions with the rendered view.
This makes the UI reactive without manual DOM updates.

## 1. Interpolation

Interpolation inserts component values into HTML.

```html
<p>Hello, {{ userName }}!</p>
```

Use interpolation for simple expressions only.

```html
<p>{{ items.length }} items</p>
```

### Safe navigation

Avoid errors when data may be null or undefined:

```html
<p>{{ user?.name }}</p>
```

## 2. Property binding

Property binding updates DOM element properties from component state.

```html
<img [src]="photoUrl" alt="Profile photo" />
<button [disabled]="isSaving">Save</button>
```

### Attribute binding vs property binding

- Property binding: `[]` updates DOM properties
- Attribute binding: `attr.` updates HTML attributes

```html
<button [attr.aria-label]="label">OK</button>
```

## 3. Event binding

Use `()` to listen to DOM events and call component methods.

```html
<button (click)="save()">Save</button>
```

### Event payload

Capture event details with `$event`.

```html
<input (input)="onInput($event.target.value)" />
```

## 4. Two-way binding

Two-way binding combines property and event binding using `[( )]`.

```html
<input [(ngModel)]="userName" />
```

It requires the `FormsModule` or `ReactiveFormsModule`.

## 5. Template reference variables

Use `#ref` to access DOM elements or child components.

```html
<input #email />
<button (click)="send(email.value)">Send</button>
```

## 6. Structural directives

Structural directives add or remove DOM elements.

```html
<div *ngIf="isLoggedIn">Hello back!</div>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

Common structural directives:

- `*ngIf`
- `*ngFor`
- `*ngSwitch`

## 7. Attribute directives

Attribute directives change appearance or behavior.

```html
<div [ngClass]="{ selected: isSelected }">Item</div>
<div [ngStyle]="{ color: textColor }">Message</div>
```

## 8. Pipes inside templates

Pipes transform data for display.

```html
<p>{{ dateValue | date:'shortDate' }}</p>
<p>{{ price | currency:'USD' }}</p>
```

## What can go in templates?

Allowed:

- property access: `user.name`
- method calls: `getLabel()`
- ternary expressions
- logical operators

Avoid:

- assignments
- loops other than `*ngFor`
- complex business logic

## Best practices

- Keep template expressions simple
- Move complex logic to component methods
- Prefer one-way binding and explicit event handling
- Use `async` pipe for observables inside templates

## Common interview points

- Difference between interpolation and property binding
- When to use `[(ngModel)]`
- Why templates should avoid complex expressions
- Role of template reference variables
