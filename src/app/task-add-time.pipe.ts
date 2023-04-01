

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TaskTime'
})
export class TaskAddTimePipe implements PipeTransform {

  transform(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }
}
