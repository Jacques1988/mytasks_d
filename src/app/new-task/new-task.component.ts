
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  taskService = inject(TasksService)
  inputFieldRef = viewChild<ElementRef<HTMLInputElement>>('taskInputField')


  addTask(){
    if(this.inputFieldRef()!.nativeElement.value === ""){
      return
    }else{
      const textInput = this.inputFieldRef()!.nativeElement.value
      this.taskService.addNewTask(textInput)
    }
    
  }
}
