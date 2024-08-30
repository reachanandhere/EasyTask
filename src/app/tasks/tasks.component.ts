import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Buy groceries',
      summary: 'Milk, Cheese, Pizza, Fruit, Tylenol',
      dueDate: '2021-07-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Plan weekend trip',
      summary: 'Go to the beach',
      dueDate: '2021-07-02',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Organize office party',
      summary: 'Get a cake',
      dueDate: '2021-07-03',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Buy a gift',
      summary: 'Get a gift for the birthday party',
      dueDate: '2021-07-04',
    }
    
  ];
  
  @Input() name?: string | undefined;
  @Input() id!: string;

  isAddingTask = false;

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseDialog(){
    this.isAddingTask = false;
  }

  onTaskAdd(taskData: newTaskData) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: this.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.isAddingTask = false;
  }

}
