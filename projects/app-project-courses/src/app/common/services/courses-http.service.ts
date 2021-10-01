import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAll(
    page: number = 1,
    pageSize: number = 10,
    ordering: string = '',
    search: string = ''
  ): Observable<Paginable<Course>> {
    const params = new HttpParams({
      fromObject: {
        page,
        page_size: pageSize,
        ordering,
        search
      }
    })

    return this.http.get<Paginable<CourseInterface>>(this.endpoint, { params } )
      .pipe(
        map(res => {
          return ({
            ...res,
            results: res.results.map(result => new Course(result))
          }
        )})
      )
  }

  getOne(id: number): Observable<Course> {
    return this.http.get<CourseInterface>(`${this.endpoint}${id}/`)
      .pipe(
        map(res => new Course(res))
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

  updateCover(id: number, file: File): Observable<string> {
    const body = new FormData();
    body.append('cover', file)

    return this.http.put<{ cover: string }>(`${this.endpoint}cover/${id}/`, body)
      .pipe(map(res => res.cover))
  }

  updateTemary(id: number, file: File): Observable<string> {
    const body = new FormData();
    body.append('temary', file)

    return this.http.put<{ temary: string }>(`${this.endpoint}temary/${id}/`, body)
      .pipe(map(res => res.temary))
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}${id}/`)
  }
}