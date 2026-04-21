import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveBasicComponent } from './directive-basic-component';

describe('DirectiveBasicComponent', () => {
  let component: DirectiveBasicComponent;
  let fixture: ComponentFixture<DirectiveBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveBasicComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
