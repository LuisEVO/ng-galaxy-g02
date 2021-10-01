import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';

@Component({
  templateUrl: './course-detail.view.html',
  styleUrls: ['./course-detail.view.scss']
})
export class CourseDetailView implements OnInit {
  loading = true;
  course?: Course;
  courseId!: number;

  constructor(
    private route: ActivatedRoute,
    private coursesHttp: CoursesHttpService
  ) {
    this.courseId = +this.route.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.coursesHttp.getOne(this.courseId)
    .subscribe(
      course => {
        this.course = course;
        this.loading = false;
      }
    )
  }
}
