import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';
import { delay } from 'rxjs/operators';

@Component({
  templateUrl: './courses.view.html',
  styleUrls: ['./courses.view.scss']
})
export class CoursesView implements OnInit {
  loading = false;
  courses: Course[] = [];
  page: number = 1;
  haveNext: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesHttp: CoursesHttpService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    if (this.loading) return;
    if (!this.haveNext) return;

    this.loading = true;
    this.coursesHttp.getAll(this.page)
    .subscribe(
      paginatedCourses => {
        this.courses = [ ...this.courses, ...paginatedCourses.results ];
        this.page += 1; 
        this.haveNext = Boolean(paginatedCourses.next)
        this.loading = false;
      }
    )
  }

  goDetail(courseId: number) {
    this.router.navigate(['./', courseId], { relativeTo: this.route });
  }

}
