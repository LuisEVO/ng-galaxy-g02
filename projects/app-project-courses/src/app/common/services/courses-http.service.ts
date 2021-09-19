import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/app-project-courses/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseInterface } from '../interfaces/course.interface';
import { Paginable } from '../interfaces/paginable.interface';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {
  private endpoint = `${environment.apiUrl}/courses/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Paginable<Course>> {
    return this.http.get<Paginable<CourseInterface>>(this.endpoint)
      .pipe(
        map(res => {
          return ({
            ...res,
            results: res.results.map(result => new Course(result))
          }
        )})
      )
  }

  create(body: Partial<CourseInterface>): Observable<Course> {
    return this.http.post<CourseInterface>(this.endpoint, body)
      .pipe(map(res => new Course(res)))
  }

  update(id: number, body: Partial<CourseInterface>): Observable<Course> {
    return this.http.put<CourseInterface>(`${this.endpoint}${id}/`, body)
      .pipe(map(res => new Course(res)))
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}${id}/`)
  }
}