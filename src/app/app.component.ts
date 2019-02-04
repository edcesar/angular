import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de tarefas';
  tasks = [];
  task = "";

  add() {
    this.tasks.push(this.task);
    this.clearTask();
  }

  clearTask() {
    this.task = '';
  }
}
