import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFeaturing]'
})
export class FeaturingDirective {

  constructor(element: ElementRef) {
    }
    @HostListener("click") onClicks(){
      this.deco("underline")
    }
  private deco(action:string){
    this.element.nativeElement.style.color = action;
  }

}
