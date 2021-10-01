import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  @Input() course!: Course;
}
