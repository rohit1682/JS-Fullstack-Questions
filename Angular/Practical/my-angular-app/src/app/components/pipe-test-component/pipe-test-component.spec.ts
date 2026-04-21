import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTestComponent } from './pipe-test-component';

describe('PipeTestComponent', () => {
  let component: PipeTestComponent;
  let fixture: ComponentFixture<PipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
