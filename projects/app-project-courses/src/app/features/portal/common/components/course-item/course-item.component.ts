import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() course!: Course;

  @Output() goDetail: EventEmitter<void> = new EventEmitter();
}
