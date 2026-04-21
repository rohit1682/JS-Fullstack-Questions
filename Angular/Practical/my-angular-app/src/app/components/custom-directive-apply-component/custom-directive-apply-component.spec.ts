import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveApplyComponent } from './custom-directive-apply-component';

describe('CustomDirectiveApplyComponent', () => {
  let component: CustomDirectiveApplyComponent;
  let fixture: ComponentFixture<CustomDirectiveApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDirectiveApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveApplyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
