# Angular Directives

Directives are classes that can modify the DOM, host elements, or add custom behavior.
There are three main kinds:

- Components (a directive with a template)
- Attribute directives
- Structural directives

## 1. Attribute directives

Attribute directives change the appearance or behavior of existing elements.

### Common examples

- `ngClass`
- `ngStyle`
- `ngModel`

### Custom attribute directive example

```ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input('appHighlight') color = 'yellow';

  constructor(private element: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
```

```html
<p appHighlight="lightblue">Hover me</p>
```

### Attribute directive features

- use `@HostBinding()` to update host element properties
- use `@HostListener()` to respond to events
- use inputs to customize directive behavior

## 2. Structural directives

Structural directives add or remove DOM elements.
They operate on templates using `TemplateRef` and `ViewContainerRef`.

### Built-in structural directives

- `*ngIf` — conditionally render content
- `*ngFor` — render a list
- `*ngSwitch` — switch-case rendering

```html
<div *ngIf="isLoggedIn">Welcome back!</div>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

### Custom structural directive example

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appIf]' })
export class AppIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appIf(condition: boolean) {
    this.viewContainer.clear();
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
```

```html
<div *appIf="showMessage">This message is visible.</div>
```

## 3. Component directives

Components are technically directives with a template.
The main difference is that components have their own view.

## How directives are applied

- Attribute selector: `[appHighlight]`
- Element selector: `appHighlight`
- Class selector: `.appHighlight`
- Structural selector: `*appIf`

## Common interview questions

- What is the difference between an attribute directive and a structural directive?
- How do you create a custom directive?
- When should you use a directive instead of a component?

## Best practices

- Use directives for reusable DOM behavior
- Keep directive logic simple and declarative
- Avoid directly manipulating the DOM when you can use Angular templates
- Prefer `@HostBinding` and `@HostListener` over `ElementRef` when possible
