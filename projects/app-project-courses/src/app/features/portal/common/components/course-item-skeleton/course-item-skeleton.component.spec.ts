import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemSkeletonComponent } from './course-item-skeleton.component';

describe('CcourseItemSkeletonComponent', () => {
  let component: CourseItemSkeletonComponent;
  let fixture: ComponentFixture<CourseItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
