import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTemplate } from './component-template';

describe('ComponentTemplate', () => {
  let component: ComponentTemplate;
  let fixture: ComponentFixture<ComponentTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
