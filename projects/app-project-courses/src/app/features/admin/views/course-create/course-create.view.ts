import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInterface } from 'projects/app-project-courses/src/app/common/interfaces/course.interface';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';

@Component({
  templateUrl: './course-create.view.html',
  styleUrls: ['./course-create.view.scss']
})
export class CourseCreateView implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesHttp: CoursesHttpService,
  ) { }

  ngOnInit(): void {
  }

  create(form: Partial<CourseInterface>) {
    this.coursesHttp.create(form)
      .subscribe(
        () => this.router.navigate(['../'], { relativeTo: this.route })
      )

  }

}
