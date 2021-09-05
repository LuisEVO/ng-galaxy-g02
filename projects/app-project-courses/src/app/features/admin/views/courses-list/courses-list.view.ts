import { Component, OnInit } from '@angular/core';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';

@Component({
  templateUrl: './courses-list.view.html',
  styleUrls: ['./courses-list.view.scss']
})
export class CoursesListView implements OnInit {
  displayedColumns = ['title', 'subtitle', 'actions'];
  dataSource: Course[] = [];

  constructor(
    private coursesHttp: CoursesHttpService
  ) { }

  ngOnInit(): void {
    this.coursesHttp.getAll()
    .subscribe(
      paginableCourses => this.dataSource = paginableCourses.results
    )
  }

}
