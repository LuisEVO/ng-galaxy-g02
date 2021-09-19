import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreateView } from './course-create.view';

describe('CourseCreateView', () => {
  let component: CourseCreateView;
  let fixture: ComponentFixture<CourseCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
