import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<boolean>();

  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  onCloseDialog() {
    this.closeDialog.emit(true);
  }

  onSubmit() {
    if (this.enteredTitle && this.enteredSummary && this.enteredDueDate) {
      this.tasksService.addTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          dueDate: this.enteredDueDate,
        },
        this.userId
      );
    }
    this.closeDialog.emit(true);
  }
}
