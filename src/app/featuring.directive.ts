import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFeaturing]'
})
export class FeaturingDirective {

  constructor(element: ElementRef) {
    }

    private deco(action:string){
      // this.element.nativeElement.style.color = action;
    }
  
    @HostListener("click") onClicks(){
      this.deco("underline")
    }

}
