import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list-component/list-component';
import { ParentComponent } from "./components/list-parent-child/parent-component/parent-component";

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
