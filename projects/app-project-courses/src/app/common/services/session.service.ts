import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  get accessToken() {
    return localStorage.getItem('access');
  }

  create(credentials: Credentials) {
    localStorage.setItem('access', credentials.access);
    localStorage.setItem('refresh', credentials.refresh);
  }

}
