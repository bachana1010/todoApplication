
import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskStatusColor]'
})
export class TodoStatusDirective implements OnChanges {
  @Input('appTaskStatusColor') isTaskDone: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.isTaskDone) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgreen');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'salmon');
    }
  }
}