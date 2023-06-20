import { Component } from '@angular/core';

import{Todo} from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{
  localItem: string | null;
  
deleteTodo(todo: Todo) {
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
addTodo(todo: Todo){
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
toggleTodo(todo: Todo){
  console.log(todo);  
  const index = this.todos.indexOf(todo);
  this.todos[index].active = !this.todos[index].active;
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
todos: Todo[];

 constructor(){
  this.localItem=localStorage.getItem("todos");
  if(this,this.localItem == null){
    this.todos = [];
  }
  else{
    console.log(this.todos);
    this.todos = JSON.parse(this.localItem);
  }
 }
}
