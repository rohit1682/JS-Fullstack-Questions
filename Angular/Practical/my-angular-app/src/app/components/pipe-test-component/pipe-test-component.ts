import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReverseStringPipe } from '../../pipes/reverse-string-pipe';

@Component({
  selector: 'app-pipe-test-component',
  standalone: true,
  imports: [FormsModule, ReverseStringPipe],
  templateUrl: './pipe-test-component.html',
  styleUrl: './pipe-test-component.scss',
})
export class PipeTestComponent {
  name: string = "";
}
