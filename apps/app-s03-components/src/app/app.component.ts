import { Component } from '@angular/core';
import { ButtonColor } from './components/button/button.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-s03-components';
  btnColor: ButtonColor = 'primary';
  files: File[] = [];

  constructor() {
    setTimeout(() => {
      this.btnColor = 'danger';
    }, 2000)
  }

  addFile(files: FileList) {
    this.files.push(...Array.from(files));
  }
}
