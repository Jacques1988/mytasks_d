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

}
