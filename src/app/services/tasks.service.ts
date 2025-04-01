import { Injectable, signal } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = tasks
  filteredTasks= signal<Task[]>(this.tasks)

  getAllTasks(){
    this.filteredTasks.set(this.tasks)
  }

  updateTask(task: Task){
    let selectedTask = this.tasks.findIndex((data: Task) => data.id === task.id) 
    this.tasks.splice(selectedTask, 1)
    this.tasks.splice(selectedTask, 0, task)
  }

  addNewTask(taskValue: string){
    const newTask = {
      id: this.tasks.length +1,
      task: taskValue,
      status: "incomplete",
      checked: false
    }
    this.tasks.push(newTask)
  }

  filterCompletedTasks(){
    const completedTasks = this.tasks.filter((task: Task) => task.status === "completed")
    this.filteredTasks.set(completedTasks)
  }

  filterIncompletedTasks(){
    const incompletedTasks = this.tasks.filter((tasks: Task) => tasks.status === "incomplete")
    this.filteredTasks.set(incompletedTasks)
  }

}
