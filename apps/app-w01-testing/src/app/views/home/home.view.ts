import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TodoHttpService } from '../../services/todo-http.service';

@Component({
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  tasks: Task[] = [];

  title: string = '';

  constructor(
    private todoHttp: TodoHttpService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.todoHttp.getAll()
    .subscribe(tasks => this.tasks = tasks)
  }

  add() {
    this.todoHttp.create({
      title: this.title,
      completed: false
    }).subscribe(
      task => this.tasks.push(task)
    )

    this.title = '';
  }

  update(task: Task) {
    const completed = !task.completed;

    this.todoHttp.update(task.id, {
      title: task.title,
      completed
    }).subscribe(
      taskUpdated => {
        const index = this.tasks.findIndex(taskStored => taskStored.id === taskUpdated.id);
        this.tasks[index] = taskUpdated;
      }
    )
  }

  remove(id: number, index: number) {
    this.todoHttp.remove(id)
    .subscribe(
      () => this.tasks.splice(index, 1)
    )
  }

}
