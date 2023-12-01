import { Injectable } from '@angular/core';
import { ITodo } from '../Models/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor() { }

  apiUrl: string = 'http://localhost:3000/todo';

  // getAll(): Promise<ITodo[]> {
  //   return fetch(this.apiUrl).then(res => res.json())
  // }

  getTodo(){

  }

  todos:ITodo[] = [];

  create(todo: Partial<ITodo>): Promise<ITodo> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json())
  }

  changeStatus(todo: ITodo): Promise<ITodo> {
    const url = `this.apiUrl${todo.id}`;

    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed, title: todo.title }),
    })
      .then((res) => res.json())
      .then((updatedTodo: ITodo) => {
        // Opzionale: Aggiorna la lista locale dei todos con il todo appena aggiornato
        // const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
        // if (index !== -1) {
        //   this.todos[index] = updatedTodo;
        // }

        return updatedTodo;
      });
  }

}
