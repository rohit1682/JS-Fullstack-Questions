import { Component, HostListener, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-directive-basic-component',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './directive-basic-component.html',
  styleUrl: './directive-basic-component.scss',
})
export class DirectiveBasicComponent {
  
  bgColor = signal<string>("");

  changeBgColor(className: string) {
    this.bgColor.set(className);
  }

  textColor: string = 'green';
  textHover: boolean = false;

  onMouseEnter() {
    this.textHover = true;
  }

  onMouseOut() {
    this.textHover = false;
  }

  myStyleColor : boolean = false;

  // myStyle = {
  //   'background-color' : this.myStyleColor ? "green" : "red"
  // }

  toggleColor() : void {
    this.myStyleColor = !this.myStyleColor;
  }
}
