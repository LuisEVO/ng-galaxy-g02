import { Component } from '@angular/core';
import { DATA } from './data';
import { LineoData } from './interfaces/lineo-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-s02-directives-example';
  data: LineoData[] = DATA;
}
