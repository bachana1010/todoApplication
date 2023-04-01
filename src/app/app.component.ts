import { Component,ViewChild, ElementRef  } from '@angular/core';
import { Todo } from './todo.interface';
import { ToastrService } from 'ngx-toastr';
import { TaskAddTimePipe } from './task-add-time.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskAddTimePipe]


})
export class AppComponent {

  todos: Todo[] = [ ];
  newTaskDescription: string = '';


  constructor(private toastr: ToastrService,
    private TaskAddTimePipe: TaskAddTimePipe,
    private el: ElementRef) {}
    @ViewChild('notificationSound', { static: false }) notificationSound!: ElementRef;


  addTask() {
    if (this.newTaskDescription && this.newTaskDescription.trim()) {
      const newTask: Todo = {
        id: this.todos.length + 1,
        description: this.newTaskDescription.trim(),
        done: false,
      };

      this.todos.push(newTask);
      this.newTaskDescription = '';
  
      const time = this.TaskAddTimePipe.transform();
  
      this.toastr.success('Todo added successfully AT - ' + time);

    }
    
  }

  playNotificationSound() {

    this.notificationSound.nativeElement.play();

  }
  

  countCompletedTasks(): number {


    return this.todos.filter((todo) => todo.done).length;
  }

  countIncompleteTasks(): number {

   
    return this.todos.filter((todo) => !todo.done).length;
  }
}
