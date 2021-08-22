import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  getOne(id: number): Observable<Task> {
    return this.http.get<Task>(`http://localhost:3000/tasks/${id}`);
  }

  create(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/tasks', task);
  }

  update(id: number, task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`http://localhost:3000/tasks/${id}`, task)
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/tasks/${id}`);
  }
}
