import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseInterface } from '../interfaces/course.interface';
import { Paginable } from '../interfaces/paginable.interface';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Paginable<Course>> {
    return this.http.get<Paginable<CourseInterface>>('api/courses')
      .pipe(
        map(res => {
          return ({
            ...res,
            results: res.results.map(result => new Course(result))
          }
        )})
      )
  }
}