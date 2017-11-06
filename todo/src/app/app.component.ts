import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: "todo-app",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    // using lambda function or arrow function to filter
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}
