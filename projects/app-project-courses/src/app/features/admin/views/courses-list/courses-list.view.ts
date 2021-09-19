import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';
import { filter } from 'rxjs/operators';
import { CourseConfirmRemoveComponent } from '../../common/components/course-confirm-remove/course-confirm-remove.component';

@Component({
  templateUrl: './courses-list.view.html',
  styleUrls: ['./courses-list.view.scss']
})
export class CoursesListView implements OnInit {
  displayedColumns = ['title', 'frequency', 'level', 'startDate', 'schedule', 'actions'];
  dataSource: Course[] = [];

  constructor(
    private coursesHttp: CoursesHttpService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.coursesHttp.getAll()
    .subscribe(
      paginableCourses => this.dataSource = paginableCourses.results
    )
  }

  confirmRemove(course: Course) {
    const modal = this.dialog.open(CourseConfirmRemoveComponent, { data: { courseName: course.name } });
    modal.afterClosed()
      .pipe(filter(res => Boolean(res)))
      .subscribe(() => this.remove(course))
  }

  remove(course: Course) {
    this.coursesHttp.remove(course.id)
    .subscribe(
      () => {
        this.dataSource = this.dataSource.filter(courseItem => courseItem.id !== course.id);
      }
    )
  }

}
