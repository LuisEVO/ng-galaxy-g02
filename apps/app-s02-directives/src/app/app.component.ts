import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-s02-directives';
  active = false;
  itemIdActive?: number;

  tasks = ['Hacer Tarea', 'Estudiar']
  students = [
    { name: 'Luis', status: 'A' },
    { name: 'José', status: 'I' },
    { name: 'José', status: 'R' },
  ]

  selectItem(id: number) {
    this.itemIdActive = id;
  }

  setActiveTrue() {
    this.active = true;
  }

  setActiveFalse() {
    this.active = false;
  }

}
