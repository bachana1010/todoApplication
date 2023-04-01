import { Component, Input, Output, EventEmitter, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.css']
})
export class IncompleteComponent implements OnInit {
  @Input() todo_incomplete: Todo[] = [];
  @Input() incompleteSound: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  countIncompleteTasks(): number {
    return this.todo_incomplete.filter((todo) => !todo.done).length;
  }

  playSound(soundPath: string) {
    const audio = new Audio(soundPath);
    audio.play();
  }
  
  DoneNotification() {
    this.playSound(this.incompleteSound);
  }
  
  
}
