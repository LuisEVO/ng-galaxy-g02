import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, CharactersResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<CharactersResponse>('https://rickandmortyapi.com/api/character')
    .pipe(map(res => res.results));
  }

  getCharacter(characterId: string): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${characterId}`);
  }
}
