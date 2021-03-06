import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ContiButtonComponent;
  let fixture: ComponentFixture<ContiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
