import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInterface } from 'projects/app-project-courses/src/app/common/interfaces/course.interface';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';

@Component({
  templateUrl: './course-update.view.html',
  styleUrls: ['./course-update.view.scss']
})
export class CourseUpdateView implements OnInit {
  courseId: number;
  course?: Course;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesHttp: CoursesHttpService
  ) {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.coursesHttp.getOne(this.courseId)
    .subscribe(
      course => this.course = course
    )
  }

  update(form: Partial<CourseInterface>) {
    this.coursesHttp.update(this.courseId, form)
    .subscribe(
      () => this.router.navigate(['../../'], { relativeTo: this.route })
    )
  }

  updateCover(file: File) {
    this.coursesHttp.updateCover(this.courseId, file)
    .subscribe(
      url => {
        if (this.course) {
          this.course.cover = url;
        }
      }
    )
  }

  updateTemary(file: File) {
    this.coursesHttp.updateTemary(this.courseId, file)
    .subscribe(
      url => {
        if (this.course) {
          this.course.temary = url;
        }
      }
    )
  }

}
