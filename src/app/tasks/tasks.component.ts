import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgFor],
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
