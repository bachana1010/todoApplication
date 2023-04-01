import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  @Input() todos_complete: Todo[] = [];
  @Input() completeSound: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countCompletedTasks(): number {
    return this.todos_complete.filter((todo) => todo.done).length;
  }

  playSound(soundPath: string) {
    const audio = new Audio(soundPath);
    audio.play();
  }
  
  UnDoneNotification() {
    // ...
    this.playSound(this.completeSound);
  }
  

}
