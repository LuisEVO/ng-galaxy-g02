import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseConfirmRemoveComponent } from './course-confirm-remove.component';

describe('CourseConfirmRemoveComponent', () => {
  let component: CourseConfirmRemoveComponent;
  let fixture: ComponentFixture<CourseConfirmRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseConfirmRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseConfirmRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
