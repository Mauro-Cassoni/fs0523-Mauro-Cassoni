import { Component } from '@angular/core';
import { ITodo } from '../../Models/itodo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: '.app-todo-table-completed',
  templateUrl: './todo-table-completed.component.html',
  styleUrl: './todo-table-completed.component.scss'
})
export class TodoTableCompletedComponent {
  todos: ITodo[] = [];

  constructor(private todoSvc: TodosService) { }

  ngOnInit() {
    this.todoSvc.getTodoCompleted().then(todos => this.todos = todos)
  }

  changeDone(todo:ITodo){
    this.todoSvc.changeStatus(todo).then(()=>{
      let i=this.todos.findIndex(t=>t.id==todo.id)
      this.todos.splice(i,1)})
  }

  deleteTodo(id:number){
    this.todoSvc.delete(id).then(()=>{let i=this.todos.findIndex(t=>t.id==id)
      this.todos.splice(i,1)})
  }

}
