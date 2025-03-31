import { Component, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { TaskComponent } from "./task/task.component";
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TasksService)
  tasks = inject(TasksService).getAllTasks()

  updateTask(task: Task){
    this.taskService.updateTask(task)
  }
}
