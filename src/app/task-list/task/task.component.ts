import { Component,input, inject, output, } from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-task',
  imports: [
    NgClass
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  taskService = inject(TasksService)
  task = input.required<Task>()
  updateTaskEvent = output()


  constructor(){}

  toggleStatus(){
    this.task().checked = !this.task().checked
    this.task().status === "completed" ? this.task().status = "incomplete" : this.task().status = "completed"
    this.updateTaskEvent.emit()
  }
}
