import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  newTodo = '';
  todos = [];
  todoObj: any;
  // To add list in todo Array
  addTodo(event) {

     this.todoObj = {
      item : this.newTodo,
      complete : false
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
  }

  // To mark as Done
  delTodo(i) {
      this.todos[i].complete = true;
  }
}
