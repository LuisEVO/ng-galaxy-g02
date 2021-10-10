import { Component, Input } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
    `
    :host {
      display: block;
      max-width: 100%;
      width: 400px;
      margin: auto;

      .mat-form-field {
        width: 100%;
      }
      
      .task-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .completed {
        text-decoration: line-through;
      }
    }
    `
  ]
})
export class TodoComponent {
  // @Input() title = '';
  @Input() title?: string;
  @Input() task?: Task;

  input = '';

  tasks: Task[] = [
    { description: 'Realizar taller angular 12', completed: false },
    { description: 'Migrar proyecto a la versión 12', completed: false },
  ];

  constructor() { }

  add(): void {
    this.tasks.push({
      description: this.input,
      completed: false
    })
    this.input = '';
  }

  remove(index: number): void {
    this.tasks.splice(index, 1);
  }

}
