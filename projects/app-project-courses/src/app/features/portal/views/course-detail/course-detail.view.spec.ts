import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailView } from './course-detail.view';

describe('CourseDetailView', () => {
  let component: CourseDetailView;
  let fixture: ComponentFixture<CourseDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
