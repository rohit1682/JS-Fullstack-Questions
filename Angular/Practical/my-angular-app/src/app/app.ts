import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list-component/list-component';
import { ParentComponent } from "./components/list-parent-child/parent-component/parent-component";
import { ComponentTemplate } from './components/component-template/component-template';
import { DatabindingComponent } from "./components/databinding-component/databinding-component";
import { DirectiveBasicComponent } from './components/directive-basic-component/directive-basic-component';
import { CustomDirectiveApplyComponent } from "./components/custom-directive-apply-component/custom-directive-apply-component";
import { TemplateFormsComponent } from "./components/template-forms-component/template-forms-component";
import { ReactiveFormsComponent } from "./components/reactive-forms-component/reactive-forms-component";
import { PipeTestComponent } from "./components/pipe-test-component/pipe-test-component";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsComponent, TemplateFormsComponent, PipeTestComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
