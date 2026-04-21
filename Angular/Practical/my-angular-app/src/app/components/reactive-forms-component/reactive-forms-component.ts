import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgStyle, NgIf } from "@angular/common";

@Component({
  selector: 'app-reactive-forms-component',
  imports: [ReactiveFormsModule, NgStyle, NgIf],
  templateUrl: './reactive-forms-component.html',
  styleUrl: './reactive-forms-component.scss',
})
export class ReactiveFormsComponent {

  constructor(private formBuilder : FormBuilder) {
    this.buildForm();
  }

  // this is a simpple form control
  color = new FormControl('');

  changeColorToGreen() {
    this.color.setValue('green');
  }

  // this is a form group

  forbiddenNameValidator(forbiddenName : string) {
    return (control : AbstractControl) : ValidationErrors | null => {
      if(!control.value) return null;
      return control.value.toLowerCase() === forbiddenName.toLowerCase() ? { 'forbiddenNameValidator' : true } : null;
    }
  }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), this.forbiddenNameValidator("Rohit")]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
  })

  handleSubmit(): void {
    console.log(this.profileForm.value)
  }


  //this is a form builder

  userForm! : FormGroup;

  buildForm() : void {
    this.userForm = this.formBuilder.group({
      name: [''],
      age: [''],
    })
  }
  
}
