import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';
import { ITodo } from '../../Models/itodo';

@Component({
  selector: '.app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(
    private todoSvc: TodosService,
    private router: Router
  ) { }

  newTodo: Partial<ITodo> = {
    completed: false
  };

  loading: boolean = false;

  save() {
    this.loading = true;
    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.newTodo = {
        completed: false
      }

    })
  }


}
