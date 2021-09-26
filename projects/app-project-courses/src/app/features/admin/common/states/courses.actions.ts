import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';

export namespace CoursesAdminAction {
  export class Populate {
    static readonly type = "[COURSES_ADMIN] Populate";
    constructor(public courses: Course[]) {};
  }
  
  export class GetSelected {
    static readonly type = "[COURSES_ADMIN] Get Selected";
    constructor(public courseId: number) {};
  }
}



