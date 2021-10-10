import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../../interfaces/character.interface';
import { ApiHttpService } from '../../services/api-http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  character$: Observable<Character>;

  constructor(
    private apiHttp: ApiHttpService,
    private route: ActivatedRoute,
  ) {
    const characterId = this.route.snapshot.paramMap.get('characterId') || '';
    this.character$ = this.apiHttp.getCharacter(characterId);
  }
}
