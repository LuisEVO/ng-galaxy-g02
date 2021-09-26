import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { CourseInterface } from 'projects/app-project-courses/src/app/common/interfaces/course.interface';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';
import { Observable } from 'rxjs';
import { CoursesAdminAction } from '../../common/states/courses.actions';
import { CoursesAdminState } from '../../common/states/courses.state';

@Component({
  templateUrl: './course-update.view.html',
  styleUrls: ['./course-update.view.scss']
})
export class CourseUpdateView implements OnInit {
  courseId: number;
  course?: Course;

  @Select(CoursesAdminState.courseSelected)
  course$!: Observable<Course | undefined>;

  pageIndex: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesHttp: CoursesHttpService,
    private store: Store
  ) {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.pageIndex = +this.route.snapshot.queryParamMap.get('pageIndex')!;
  }

  ngOnInit(): void {
    this.load();
    this.store.dispatch(new CoursesAdminAction.GetSelected(this.courseId))
  }

  load() {
    this.course$
      .subscribe(
        course => this.course = course
      )
  }

  update(form: Partial<CourseInterface>) {
    this.coursesHttp.update(this.courseId, form)
    .subscribe(
      () => this.router.navigate(['../../'], { relativeTo: this.route, queryParams: { pageIndex: this.pageIndex } })
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
