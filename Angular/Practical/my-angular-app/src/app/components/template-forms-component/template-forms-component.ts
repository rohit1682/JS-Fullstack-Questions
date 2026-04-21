import { NgStyle, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-template-forms-component',
  imports: [FormsModule, NgStyle, NgIf],
  templateUrl: './template-forms-component.html',
  styleUrl: './template-forms-component.scss',
})
export class TemplateFormsComponent {
  myColor: string = "";
}
