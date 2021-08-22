import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Observable, of } from "rxjs";
import { TabComponent } from "ui-components/tab-group/tab/tab.component";
import { Task } from "../../interfaces/task.interface";
import { TodoHttpService } from "../../services/todo-http.service"
import { HomeView } from "./home.view"

class TodoHttpServiceTesting {
  getAll(): Observable<Task[]> {
    const taskTesting: Task = {
      id: 1,
      title: 'testing',
      completed: false
    }

    return of([taskTesting]);
  }

  create(task: Partial<Task>): Observable<Task> {
    const taskCreated = {
      id: new Date().getTime(),
      title: task.title,
      completed: task.completed
    } as Task;

    return of(taskCreated);
  }

  update(id: number, task: Partial<Task>): Observable<Task> {
    const taskUpdated = {
      id,
      title: task.title,
      completed: task.completed
    } as Task;

    return of(taskUpdated);
  }

  remove(id: number): Observable<void> {
    return of(undefined)
  }
}

describe('HomeView2', () => {
  let fixure: ComponentFixture<HomeView>;
  let component: HomeView;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeView],
      providers: [
        {
          provide: TodoHttpService,
          useClass: TodoHttpServiceTesting
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixure = TestBed.createComponent(HomeView);
    component = fixure.componentInstance;
    fixure.detectChanges()
  })

  it('se debe crear una instancia', () => {
    expect(component).toBeDefined();
  })

  it('se debe cargar las tareas desde el servidor', () => {
    component.load()

    expect(component.tasks.length).toBe(1);
  })

  it('se debe crear una tareas desde el servidor', () => {
    component.title = 'testing 2'
    component.add()

    expect(component.tasks.length).toBe(2);
    expect(component.title).toBe('');
  })

  it('se debe actualizar una tareas desde el servidor', () => {
    component.title = 'testing to update'
    component.add()

    const taskToUpdate = component.tasks[1];

    expect(taskToUpdate.completed).toBe(false);

    component.update(taskToUpdate)

    expect(component.tasks[1].completed).toBe(true);
  })

  it('se debe eliminar una tareas desde el servidor', () => {
    component.title = 'testing to update'
    component.add()

    const lenght = component.tasks.length;
    const index = 1;
    const taskToDelete = component.tasks[index];

    component.remove(taskToDelete.id, index);

    expect(component.tasks.length).toBe(lenght - 1);
  })

})