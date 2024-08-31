import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string | undefined;
  @Input() id!: string;


  constructor(private tasksService: TasksService) {
  }

  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onCompleteTask(taskId: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseDialog() {
    this.isAddingTask = false;
  }

 
}
