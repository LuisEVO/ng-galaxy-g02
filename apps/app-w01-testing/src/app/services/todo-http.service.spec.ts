import { HttpClient } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { TodoHttpService } from "./todo-http.service";

describe('TodoHttp', () => {
  let http: jasmine.SpyObj<HttpClient>;
  let todoHttp: TodoHttpService;

  beforeEach(() => {

    http = jasmine.createSpyObj<HttpClient>('HttpClient', ['get', 'post', 'put', 'delete']);

    TestBed.configureTestingModule({
      providers: [
        TodoHttpService,
        {
          provide: HttpClient,
          useValue: http
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
  })

  beforeEach(() => {
    todoHttp = TestBed.inject(TodoHttpService);
    http = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  })

  it ('se debe llamar a los talleres desde el servidor', () => {
    todoHttp.getAll()

    expect(http.get).toHaveBeenCalledWith('http://localhost:3000/tasks');
  })

  it ('se debe llamar a los talleres desde el servidor', () => {
    todoHttp.getOne(1)

    expect(http.get).toHaveBeenCalledWith('http://localhost:3000/tasks/1');
  })

  it ('se debe llamar a los talleres desde el servidor', () => {
    const body = {
      title: '',
      completed: false
    };

    todoHttp.create(body)

    expect(http.post).toHaveBeenCalledWith('http://localhost:3000/tasks', body);
  })

  it ('se debe llamar a los talleres desde el servidor', () => {
    const id = 1;
    const body = {
      title: '',
      completed: false
    };

    todoHttp.update(id, body)

    expect(http.put).toHaveBeenCalledWith('http://localhost:3000/tasks/' + id, body);
  })

  it ('se debe llamar a los talleres desde el servidor', () => {
    const id = 1;

    todoHttp.remove(id)

    expect(http.delete).toHaveBeenCalledWith('http://localhost:3000/tasks/' + id);
  })



})