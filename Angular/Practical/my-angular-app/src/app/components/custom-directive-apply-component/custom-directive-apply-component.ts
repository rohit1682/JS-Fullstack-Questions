import { Component } from '@angular/core';
import { CustomAttribute } from "../../directives/custom-attribute";

@Component({
  selector: 'app-custom-directive-apply-component',
  standalone: true,
  imports: [CustomAttribute],
  templateUrl: './custom-directive-apply-component.html',
  styleUrl: './custom-directive-apply-component.scss',
})
export class CustomDirectiveApplyComponent {

}
