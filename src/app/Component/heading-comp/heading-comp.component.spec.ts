import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingCompComponent } from './heading-comp.component';

describe('HeadingCompComponent', () => {
  let component: HeadingCompComponent;
  let fixture: ComponentFixture<HeadingCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingCompComponent]
    });
    fixture = TestBed.createComponent(HeadingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
