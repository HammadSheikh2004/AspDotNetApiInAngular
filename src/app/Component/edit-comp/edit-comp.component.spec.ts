import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompComponent } from './edit-comp.component';

describe('EditCompComponent', () => {
  let component: EditCompComponent;
  let fixture: ComponentFixture<EditCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCompComponent]
    });
    fixture = TestBed.createComponent(EditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
