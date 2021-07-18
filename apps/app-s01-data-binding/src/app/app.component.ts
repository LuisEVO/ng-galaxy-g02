import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  year = 2021;
  bool = false;
  person = { name: 'Luis' };
  users = ['user1', 'user2'];

  buttonAction() {
    console.log('El boton fue clickeado')
  }
}
