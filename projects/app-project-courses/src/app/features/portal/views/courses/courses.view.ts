import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';

@Component({
  templateUrl: './courses.view.html',
  styleUrls: ['./courses.view.scss']
})
export class CoursesView implements OnInit {
  loading = true;
  courses: Course[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesHttp: CoursesHttpService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.coursesHttp.getAll()
    .subscribe(
      paginatedCourses => {
        this.courses = paginatedCourses.results;
        this.loading = false;
      }
    )
  }

  goDetail(courseId: number) {
    this.router.navigate(['./', courseId], { relativeTo: this.route });
  }

}
