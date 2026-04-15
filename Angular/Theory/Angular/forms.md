# Angular Forms

Angular supports two main form approaches:

1. Template-driven forms
2. Reactive forms

Both approaches make it easier to handle user input, validation, and form state.

## Template-driven forms

Template-driven forms are simpler and use Angular directives in the template.

### Setup

Import `FormsModule` in the module or `import { FormsModule } from '@angular/forms';` in a standalone component.

### Example

```html
<form #userForm="ngForm" (ngSubmit)="submit(userForm)">
  <input name="name" [(ngModel)]="user.name" required />
  <input name="email" [(ngModel)]="user.email" email />
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

### Key concepts

- `ngModel` binds form fields to component properties
- `ngForm` tracks form state
- validation is declared in the template

### Pros

- easy to learn
- minimal boilerplate
- good for small forms

### Cons

- harder to unit test
- validation logic is split between template and component

## Reactive forms

Reactive forms are more explicit and powerful.
They are built using `FormGroup`, `FormControl`, and `FormArray`.

### Setup

Import `ReactiveFormsModule`.

### Example

```ts
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class SignupComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.min(18)]]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="submit()">
  <input formControlName="name" />
  <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched">Name is required</div>

  <input formControlName="email" />
  <input formControlName="age" type="number" />

  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>
```

### Key concepts

- `FormControl` represents a single field
- `FormGroup` groups controls into a form
- validators are defined in code
- form state is observable

### Pros

- easier to unit test
- validation is centralized
- more control over form behavior

### Cons

- more boilerplate
- steeper learning curve

## Validation

Common built-in validators:

- `Validators.required`
- `Validators.email`
- `Validators.minLength()`
- `Validators.maxLength()`
- `Validators.pattern()`

### Custom validator example

```ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ageValidator(control: AbstractControl): ValidationErrors | null {
  return control.value >= 18 ? null : { underage: true };
}
```

Use it in a form control:

```ts
age: [null, [ageValidator]]
```

## Form arrays

Use `FormArray` for dynamic fields.

```ts
hobbies: this.fb.array([this.fb.control('')])
```

## Best practices

- prefer reactive forms for medium to large forms
- keep template-driven forms for simple use cases
- use custom validators for reusable checks
- show validation messages only after the control is touched
- avoid direct DOM access for form state

## Interview questions

- What is the difference between template-driven and reactive forms?
- When would you use `FormGroup` vs `FormArray`?
- How do you create a custom validator?
- How do you display validation errors in Angular?
