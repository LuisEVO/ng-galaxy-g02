import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';
import { merge } from 'rxjs';
import { debounceTime, filter, startWith } from 'rxjs/operators';
import { CourseConfirmRemoveComponent } from '../../common/components/course-confirm-remove/course-confirm-remove.component';
import { CoursesAdminAction } from '../../common/states/courses.actions';

@Component({
  templateUrl: './courses-list.view.html',
  styleUrls: ['./courses-list.view.scss']
})
export class CoursesListView implements OnInit {
  displayedColumns = ['title', 'frequency', 'level', 'startDate', 'schedule', 'actions'];
  dataSource: Course[] = [];
  dataLength?: number;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  searchControl = new FormControl('');

  constructor(
    private coursesHttp: CoursesHttpService,
    private dialog: MatDialog,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.paginator.pageIndex = +(this.route.snapshot.queryParamMap.get('pageIndex') || 0)
    const search$ = this.searchControl.valueChanges
      .pipe(debounceTime(500))

    merge(
      search$,
      this.sort.sortChange,
      this.paginator.page
    ).pipe(
      startWith({})
    ).subscribe(
      () => this.load()
    );
    
  }

  load() {
    let ordering = '';
    const search = this.searchControl.value;
    if (this.sort.active && this.sort.direction) {
      ordering = `${this.sort.direction === 'desc' ? '-' : ''}start_date`
    }
    this.coursesHttp.getAll(this.paginator.pageIndex + 1, this.paginator.pageSize, ordering, search)
    .subscribe(
      paginableCourses => {
        this.dataSource = paginableCourses.results;
        this.dataLength = paginableCourses.count;
        this.store.dispatch(new CoursesAdminAction.Populate(paginableCourses.results))
      } 
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
        if (this.dataLength) {
          this.dataLength -= 1;
        }
      }
    )
  }

  goToEdit(courseId: number) {
    this.router.navigate(['./', courseId, 'editar'], { relativeTo: this.route, queryParams: { pageIndex: this.paginator.pageIndex } })
  }

}
