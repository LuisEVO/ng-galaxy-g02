import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUpdateView } from './course-update.view';

describe('CourseUpdateView', () => {
  let component: CourseUpdateView;
  let fixture: ComponentFixture<CourseUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
