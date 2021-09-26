import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { CoursesHttpService } from 'projects/app-project-courses/src/app/common/services/courses-http.service';
import { iif, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoursesAdminAction } from './courses.actions';


interface CoursesAdminStateModel {
  courses: Course[];
  courseSelected?: Course
}

@State<CoursesAdminStateModel>({
  name: 'coursesAdmin',
  defaults: {
    courses: [],
    courseSelected: undefined
  }
})
@Injectable()
export class CoursesAdminState {

  @Selector()
  static courseSelected(state: CoursesAdminStateModel): Course | undefined {
    return state.courseSelected
  }

  constructor(
    private coursesHttp: CoursesHttpService
  ) { }

  @Action(CoursesAdminAction.Populate)
  populateCourses(ctx: StateContext<CoursesAdminStateModel>, action: CoursesAdminAction.Populate) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      courses: action.courses
    })
  }

  @Action(CoursesAdminAction.GetSelected)
  getCourseSelected(ctx: StateContext<CoursesAdminStateModel>, action: CoursesAdminAction.GetSelected) {
    const state = ctx.getState();

    const courseSelected = state.courses.find(course => course.id === action.courseId);

    of(courseSelected)
      .pipe(
        switchMap(selectedCourse => iif(() => Boolean(selectedCourse), of(selectedCourse), this.coursesHttp.getOne(action.courseId)))
      )
      .subscribe(course => {
        ctx.setState({
          ...state,
          courseSelected: course
        })
      })
  }
}
