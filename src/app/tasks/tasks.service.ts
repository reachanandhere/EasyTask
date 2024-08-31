import { Injectable } from '@angular/core';
import { newTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: newTaskData, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
