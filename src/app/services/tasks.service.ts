import { Injectable } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = tasks


  getAllTasks(){
    return this.tasks
  }

  updateTask(task: Task){
    let selectedTask = this.tasks.findIndex((data: Task) => data.id === task.id) 
    this.tasks.splice(selectedTask, 1)
    this.tasks.splice(selectedTask, 0, task)
  }
}
