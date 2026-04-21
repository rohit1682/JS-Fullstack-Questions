import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-component',
  imports: [FormsModule],
  templateUrl: './databinding-component.html',
  styleUrl: './databinding-component.scss',
})
export class DatabindingComponent {
  name: string[] = ["Rohit", "Sneha", "Rohan"];
  age: number[] = [23, 21, 33];
  index : number = 0;

  inputType: string[] = ["text", "button", "radio"];

  myText: string = "Change me";

  mySignal = signal<string>("Signal");

  changeIndex() : void {
    this.index = (this.index + 1) % this.name.length;
  }
}
