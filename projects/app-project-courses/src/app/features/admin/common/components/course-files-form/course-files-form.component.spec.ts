import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilesFormComponent } from './course-files-form.component';

describe('CourseFilesFormComponent', () => {
  let component: CourseFilesFormComponent;
  let fixture: ComponentFixture<CourseFilesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFilesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFilesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
