import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-s02-components';
  mainCount = 1;
  show = true;

  log(optionName: string) {
    console.log('El metodo se a ejecutado', optionName)
  }
}
