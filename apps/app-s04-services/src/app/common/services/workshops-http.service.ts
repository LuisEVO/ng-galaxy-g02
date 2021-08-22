import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workshop } from '../interfaces/workshop.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsHttpService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Workshop[]>('/workshops');
  }

  getOne(id: number) {
    return this.http.get<Workshop>(`/workshops/${id}`);
  }

  create(workshop: Partial<Workshop>) {
    return this.http.post<Workshop>('/workshops', workshop);
  }

  update(id: number, workshop: Partial<Workshop>) {
    return this.http.put<Workshop>(`/workshops/${id}`, workshop)
  }

  remove(id: number) {
    return this.http.delete<void>(`/workshops/${id}`);
  }
}
