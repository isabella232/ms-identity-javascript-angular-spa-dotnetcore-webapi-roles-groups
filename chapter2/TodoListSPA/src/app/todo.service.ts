import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import * as auth from './auth-config.json';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  uri = auth.resources.todoListApi.resourceUri;

  constructor(private http: HttpClient) { }

  getTodos() { 
    return this.http.get<Todo[]>(this.uri);
  }

  getTodo(id: number) { 
    return this.http.get<Todo>(this.uri + '/' +  id);
  }
  
  postTodo(todo: Todo) { 
    return this.http.post<Todo>(this.uri, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(this.uri + '/' + id);
  }

  editTodo(todo: Todo) { 
    return this.http.put<Todo>(this.uri + '/' + todo.id, todo);
  }

  getAll() {
    return this.http.get<Todo[]>(this.uri + '/' + 'getAll');
  }
}
