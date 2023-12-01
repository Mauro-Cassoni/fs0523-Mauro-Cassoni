import { Component } from '@angular/core';
import { ITodo } from '../../Models/itodo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: '.app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss'
})
export class TodoTableComponent {
  todos: ITodo[] = [];

  constructor(private todoSvc: TodosService) { }

  ngOnInit() {
    this.todoSvc.getAll().then(todos => this.todos = todos)
  }



}
