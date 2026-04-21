import { Component } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-component-template',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './component-template.html',
  styleUrl: './component-template.scss',
})
export class ComponentTemplate {
  text1 : string = "Hello";
  text2 : string = "World";

  isText1 : boolean = true;

  toggleText() : void {
    this.isText1 = !this.isText1;
  }

}
