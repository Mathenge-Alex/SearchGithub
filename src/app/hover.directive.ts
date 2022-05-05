import { Directive,ElementRef, HostListener, } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onMouseEnter() {
    this.hover('grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('');
  }

  private hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  }