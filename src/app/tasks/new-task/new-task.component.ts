import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCloseDialog() {
    this.closeDialog.emit(true);
  }

  onSubmit() {
    if (this.enteredTitle && this.enteredSummary && this.enteredDueDate) {
      this.addTask.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      });
    }
  }
}
