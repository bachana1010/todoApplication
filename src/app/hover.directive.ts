
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverTextColor]'
})
export class HoverDirective {
  @Input('appHoverTextColor') hoverColor: string = '';
  
  private defaultColor: string;

  @HostBinding('style.color') textColor: string = '';

  constructor(private el: ElementRef) {
    this.defaultColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor = this.defaultColor;
  }
}
