import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComComponent } from './button-com.component';

describe('ButtonComComponent', () => {
  let component: ButtonComComponent;
  let fixture: ComponentFixture<ButtonComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComComponent]
    });
    fixture = TestBed.createComponent(ButtonComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
