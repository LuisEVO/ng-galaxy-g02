import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../interfaces/character.interface';
import { ApiHttpService } from '../../services/api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  characters$: Observable<Character[]>;

  constructor(private apiHttp: ApiHttpService) {
    this.characters$ = this.apiHttp.getCharacters();
  }
}
