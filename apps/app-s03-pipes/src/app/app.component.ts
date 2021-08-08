import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular PIPES';
  paragarph = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `

  tasks = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3',
    'Tarea 4',
    'Tarea 5',
  ]

  price = 199.994;

  progress = 0.75;

  person = {
    name: 'Luis',
    lastname: 'Vilcarromero'
  }

  today = new Date();

  comments = 5;

  messageMapping = {
    '=0': 'No existen comentarios.',
    '=1': 'Un comentario.',
    'other': '# comentarios.'
  };

  gender = 'M';
  name = 'Juan';

  inviteMap = {
    'M': 'Sr. ',
    'F': 'Srta.'
  };

  object = {
    'A': 'activo',
    'B': 'inactivo'
  };

  map = new Map([
    ['A', 'activo'],
    ['I', 'inactivo']
  ]);


}
