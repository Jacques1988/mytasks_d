import { Component, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-filter-controls',
  imports: [],
  templateUrl: './filter-controls.component.html',
  styleUrl: './filter-controls.component.css'
})
export class FilterControlsComponent {
  tasksService = inject(TasksService)

  showAllTasks(){
    this.tasksService.getAllTasks()
  }

  showCompletedTasks(){
    this.tasksService.filterCompletedTasks()
  }

  showIncompleteTasks(){
    this.tasksService.filterIncompletedTasks()
  }
}
