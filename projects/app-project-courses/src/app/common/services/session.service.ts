import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/credentials.interface';
import { RefreshToken } from '../interfaces/refresh-token.interface';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user.model';
import { Payload } from '../interfaces/payload.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private helper = new JwtHelperService();

  get user(): User | null {
    try {
      const payload = this.helper.decodeToken<Payload>(this.accessToken);
      return new User(payload);
    } catch {
      return null;
    }
  }

  get isAuthenticated(): boolean {
    try {
      const isExpired = this.helper.isTokenExpired(this.refreshToken);
      return !isExpired;
    } catch {
      return false;
    }
  }

  get accessToken(): string {
    return localStorage.getItem('access') || '';
  }

  set accessToken(access: string) {
    localStorage.setItem('access', access);
  }

  get refreshToken(): string {
    return localStorage.getItem('refresh') || '';
  }

  set refreshToken(refresh: string) {
    localStorage.setItem('refresh', refresh);
  }

  create(credentials: Credentials) {
    this.accessToken = credentials.access;
    this.refreshToken = credentials.refresh;
  }

  update(refreshToken: RefreshToken) {
    this.accessToken = refreshToken.access;
  }

  destroy() {
    this.accessToken = '';
    this.refreshToken = '';
  }

}
