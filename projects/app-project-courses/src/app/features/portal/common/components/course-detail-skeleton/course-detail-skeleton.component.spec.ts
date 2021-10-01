import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailSkeletonComponent } from './course-detail-skeleton.component';

describe('CourseDetailSkeletonComponent', () => {
  let component: CourseDetailSkeletonComponent;
  let fixture: ComponentFixture<CourseDetailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
